import { API } from "./API";

export const getWord = async (label: string): Promise<any> => {
  const data = await API.get(`/${label}`);
  return data;
};
