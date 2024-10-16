import { dbPrisma } from "../../lib/prisma";
import { ITrailer } from "./trailer.model";
import { TrailerService } from "./trailers.service";
import { convertUrlToBlob } from "../../utils/file-upload";
import { storeCast, storeImage, storeVideo } from "../../utils/scrapper";

export class TrailerController {
  readonly trailerService: TrailerService;

  constructor() {
    this.trailerService = new TrailerService(dbPrisma);
  }

  async trailers(args: ManyArgs) {
    return this.trailerService.trailers(args);
  }

  async trailer(id: string) {
    return this.trailerService.trailer(id);
  }

  async createTrailer(trailer: any) {
    const { mediaId, videoUrl, posterUrl, releaseDate, casts, ...res } = trailer;

    //store cast
    const { castIds } = (await storeCast(casts as any)) || {};
    res.casts = JSON.stringify(castIds);

    //get Image as base64
    /*  const image = await convertUrlToBlob(trailer.posterUrl);
    
    res.poster = image; */

    //store Video
    await storeImage({ imageUrl: posterUrl, mediaId });
    await storeVideo({ mediaId, videoUrl });
    res.poster = mediaId;
    res.mediaId = mediaId;
    res.releaseDate = new Date(releaseDate);

    return this.trailerService.create(res);
  }

  async updateTrailer(input: ITrailer["update"]) {
    return this.trailerService.update(input);
  }

  async deleteTrailer(id: string) {
    return this.trailerService.delete(id);
  }
}
