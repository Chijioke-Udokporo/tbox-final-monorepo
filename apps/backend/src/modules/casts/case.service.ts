import { casts, PrismaClient } from "@prisma/client";
import { AppConfig } from "../../utils/config";
import { z } from "zod";

/**
 * description: CRUD operations class for casts
 */
class CastsCaseService {
  constructor(private readonly db: PrismaClient) {}

  /**
   * description: Get all casts
   * @returns {Promise<ManyResponse<casts>>}
   */

  async getCasts(args: ManyArgs): Promise<ManyResponse<casts>> {
    const { pagination } = AppConfig.api;
    const { page = pagination.page, limit = pagination.limit, where = {}, orderBy = {} } = args || {};
    const offset = (Number(page) - 1) * Number(limit);

    const [docs, totalDocs] = await this.db.$transaction([
      this.db.casts.findMany({ where, skip: offset, take: Number(limit), orderBy }),
      this.db.casts.count({ where }),
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
      docs,
    };
  }

  /**
   * description: Get cast by id
   * @param {string} id
   * @returns {Promise<casts | null>}
   */
  async getCastById(id: string): Promise<casts | null> {
    return this.db.casts.findUnique({ where: { id } });
  }

  /**
   * description: Create a new cast
   * @param {casts} cast
   * @returns {Promise<casts>}
   */
  async createCast(cast: casts): Promise<casts> {
    return this.db.casts.create({ data: cast });
  }

  /**
   * description: Update cast by id
   * @param {string} id
   * @param {casts} cast
   * @returns {Promise<casts>}
   */
  async updateCast(id: string, cast: casts): Promise<casts> {
    return this.db.casts.update({ where: { id }, data: cast });
  }

  /**
   * description: Delete cast by id
   * @param {string} id
   * @returns {Promise<casts>}
   */
  async deleteCast(id: string): Promise<casts> {
    return this.db.casts.delete({ where: { id } });
  }
}
