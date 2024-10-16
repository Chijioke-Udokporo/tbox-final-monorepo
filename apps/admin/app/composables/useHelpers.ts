import dayjs from "dayjs";

const formatDate = (date: Date | string | null) => {
  if (!date) return "";
  return dayjs(date).format("MMMM DD, YYYY");
};

export const useHelpers = {
  formatDate,
};
