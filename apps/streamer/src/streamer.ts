import { Hono } from "hono";
import { statSync, createReadStream } from "node:fs";
import { join } from "node:path";
import { videosDir } from "./resources";
import { stream } from "hono/streaming";

const StreamingRouter = new Hono().get("/:id", async (c) => {
  const id = c.req.param("id");
  const filePath = join(videosDir, `${id}.mp4`);
  const options: { start?: number; end?: number } = {};
  const range = c.req.header("range");

  let start: number | undefined;
  let end: number | undefined;

  if (range) {
    const bytesPrefix = "bytes=";
    if (range.startsWith(bytesPrefix)) {
      const bytesRange = range.substring(bytesPrefix.length);
      const parts = bytesRange.split("-");
      if (parts.length === 2) {
        const rangeStart = parts[0] && parts[0].trim();
        if (rangeStart && rangeStart.length > 0) {
          options.start = start = parseInt(rangeStart);
        }
        const rangeEnd = parts[1] && parts[1].trim();
        if (rangeEnd && rangeEnd.length > 0) {
          options.end = end = parseInt(rangeEnd);
        }
      }
    }
  }

  try {
    const stat = statSync(filePath);
    const contentLength = stat.size;

    if (c.req.method === "HEAD") {
      return c.newResponse(null, {
        status: 200,
        headers: {
          "Accept-Ranges": "bytes",
          "Content-Length": contentLength.toString(),
          "Content-Type": "video/mp4",
        },
      });
    } else {
      let retrievedLength: number;
      if (start !== undefined && end !== undefined) {
        retrievedLength = end + 1 - start;
      } else if (start !== undefined) {
        retrievedLength = contentLength - start;
      } else if (end !== undefined) {
        retrievedLength = end + 1;
      } else {
        retrievedLength = contentLength;
      }

      const status = start !== undefined || end !== undefined ? 206 : 200;
      const headers: Record<string, string> = {
        "Content-Length": retrievedLength.toString(),
        "Content-Type": "video/mp4",
      };

      if (range !== undefined) {
        headers["Content-Range"] = `bytes ${start || 0}-${end || contentLength - 1}/${contentLength}`;
        headers["Accept-Ranges"] = "bytes";
      }

      console.log("Starting stream with headers:", headers);

      return stream(c, async (stream) => {
        // Set status and headers before writing to the stream
        c.status(status);
        Object.entries(headers).forEach(([key, value]) => {
          c.header(key, value);
        });

        const fileStream = createReadStream(filePath, options);

        fileStream.on("error", (error) => {
          console.error("File stream error:", error);
          stream.close();
        });

        try {
          for await (const chunk of fileStream) {
            await stream.write(chunk);
          }
        } catch (error) {
          console.error("Error during streaming:", error);
        } finally {
          fileStream.close();
        }

        console.log("Finished streaming");
      });
    }
  } catch (error) {
    console.error(`Error streaming video ${filePath}:`, error);
    return c.text("Internal Server Error", 500);
  }
});

export default StreamingRouter;
