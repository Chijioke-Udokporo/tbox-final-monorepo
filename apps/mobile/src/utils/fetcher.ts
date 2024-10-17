import { Constants } from "./constants";

const fetcher = async (endpoint: string) => {
  return await fetch(`${Constants.baseUrl}/${endpoint}`)
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
};

export default fetcher;
