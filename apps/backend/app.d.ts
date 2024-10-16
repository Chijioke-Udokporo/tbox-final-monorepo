type ManyResponse<T> = {
  docs: T[];
  totalDocs: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  page: number;
  limit: number;
};

type ManyArgs = {
  page?: number | string;
  limit?: number | string;
  where?: any;
  orderBy?: any;
};
