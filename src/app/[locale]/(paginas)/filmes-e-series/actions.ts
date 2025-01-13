"use server";

import { getLocale } from "next-intl/server";
import { fetchFromApi } from "../../../../../utils/api";

export const getTrending = async (type = "movie", page = 1) => {
  const locale = await getLocale();
  const response = await fetchFromApi(
    `/trending/${type}/day?language=${locale}&page=${page}`,
    { cache: "force-cache" }
  );
  const data = await response.json();

  return data?.results;
};
