import { API, API_JSON_SERVER } from "./API";
import cache from "memory-cache";

export const getAllWords = async (page: number): Promise<any> => {
  const url = `${API_JSON_SERVER}/word_list?_page=${page}&_limit=40`;

  const cacheResponse = cache.get(url);

  if (cacheResponse) {
    return cacheResponse;
  }
  const hours = 24;
  const data = await API_JSON_SERVER.get(`/word_list?_page=${page}&_limit=40`);
  cache.put(url, data, hours * 1000 * 60 * 60);
  return data;
};

export const getWord = async (label: string): Promise<any> => {
  const url = `/${label}`;

  const cacheResponse = cache.get(url);

  if (cacheResponse) {
    return cacheResponse;
  }

  const hours = 24;
  const data = await API.get(`/${label}`);
  cache.put(url, data, hours * 1000 * 60 * 60);
  return data;
};