import { users, PrismaClient } from "@prisma/client";
import { AppConfig } from "../../utils/config";
import { IUsers } from "./users.model";

/**
 * description: CRUD operations class for users
 */
export class UserService {
  constructor(private readonly db: PrismaClient) {}

  /**
   * description: Get all users
   * @returns {Promise<ManyResponse<users>>}
   */

  async users(args: ManyArgs): Promise<ManyResponse<IUsers["select"]>> {
    const { pagination } = AppConfig.api;
    const { page = pagination.page, limit = pagination.limit, where = {}, orderBy = {} } = args || {};
    const offset = (Number(page) - 1) * Number(limit);

    const [docs, totalDocs] = await this.db.$transaction([
      this.db.users.findMany({
        where,
        skip: offset,
        take: Number(limit),
        orderBy,
      }),
      this.db.users.count({ where }),
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
      docs: docs?.map((doc) => {
        const { password, ...rest } = doc;
        return rest as any as IUsers["select"];
      }),
    };
  }

  /**
   * description: Get cast by id
   * @param {string} id
   * @returns {Promise<users | null>}
   */
  async user(id: string): Promise<IUsers["select"] | null> {
    const data = await this.db.users.findUnique({ where: { id } });
    const { password, ...rest } = data || {};
    return rest as any as IUsers["select"];
  }

  /**
   * description: Create a new cast
   * @param {users} trailer
   * @returns {Promise<users>}
   */
  async create(trailer: IUsers["insert"]): Promise<IUsers["insert"]> {
    const data = await this.db.users.create({ data: trailer });
    return data as any as IUsers["insert"];
  }

  /**
   * description: Update cast by id
   * @param {IUsers["update"]} input
   * @returns {Promise<users>}
   */
  async update(input: IUsers["update"]): Promise<users> {
    const { id, user } = input;
    return this.db.users.update({ where: { id }, data: user });
  }

  /**
   * description: Delete cast by id
   * @param {string} id
   * @returns {Promise<users>}
   */
  async delete(id: string): Promise<users> {
    return this.db.users.delete({ where: { id } });
  }
}
