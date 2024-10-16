import { trailers, PrismaClient } from "@prisma/client";
import { AppConfig } from "../../utils/config";
import { ITrailer } from "./trailer.model";
import { convertStringUrlToBase64 } from "../../utils/file-upload";

/**
 * description: CRUD operations class for trailers
 */
export class TrailerService {
  constructor(private readonly db: PrismaClient) {}

  /**
   * description: Get all trailers
   * @returns {Promise<ManyResponse<trailers>>}
   */

  async trailers(args: ManyArgs): Promise<ManyResponse<ITrailer["select"]>> {
    const { pagination } = AppConfig.api;
    const { page = pagination.page, limit = pagination.limit, where = {}, orderBy = {} } = args || {};
    const offset = (Number(page) - 1) * Number(limit);

    const [docs, totalDocs] = await this.db.$transaction([
      this.db.trailers.findMany({
        select: {
          id: true,
          title: true,
          poster: true,
          releaseDate: true,
          isPublished: true,
        },
        where,
        skip: offset,
        take: Number(limit),
        orderBy,
      }),
      this.db.trailers.count({ where }),
    ]);

    const totalPages = Math.ceil(Number(totalDocs) / Number(limit));
    const hasNextPage = Number(page) < totalPages;
    const hasPrevPage = Number(page) > 1;

    return {
      totalDocs,
      totalPages,
      hasNextPage,
      hasPrevPage,
      page: Number(page),
      limit: Number(limit),
      docs: docs as any as ITrailer["select"][],
    };
  }

  /**
   * description: Get cast by id
   * @param {string} id
   * @returns {Promise<trailers | null>}
   */
  async trailer(id: string): Promise<ITrailer["select"] | null> {
    const data = await this.db.trailers.findUnique({ where: { id } });
    if (data) {
      const casts = JSON.parse(data.casts || "[]");
      const castIds = (await this.db.casts.findMany({ where: { id: { in: casts } } })) as any;
      data.casts = castIds;
    }
    return data as any as ITrailer["select"];
  }

  /**
   * description: Create a new cast
   * @param {trailers} trailer
   * @returns {Promise<trailers>}
   */
  async create(trailer: ITrailer["insert"]): Promise<ITrailer["select"]> {
    const data = await this.db.trailers.create({ data: trailer });
    return data as any as ITrailer["select"];
  }

  /**
   * description: Update cast by id
   * @param {ITrailer["update"]} input
   * @returns {Promise<trailers>}
   */
  async update(input: ITrailer["update"]): Promise<trailers> {
    const { id, trailer } = input;
    return this.db.trailers.update({ where: { id }, data: trailer });
  }

  /**
   * description: Delete cast by id
   * @param {string} id
   * @returns {Promise<trailers>}
   */
  async delete(id: string): Promise<trailers> {
    return this.db.trailers.delete({ where: { id } });
  }
}
