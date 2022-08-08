import { API_JSON_SERVER } from "./API";

export const getWordHistory = async (): Promise<any> => {
  const data = await API_JSON_SERVER.get("/word_history");
  return data;
};

export const postWordHistory = async (word_history: string): Promise<any> => {
  const data = await API_JSON_SERVER.post("/word_history", { word_history });
  return data;
};

export const deleteWordHistory = async (word_id: number): Promise<any> => {
  const data = await API_JSON_SERVER.delete(`/word_history/${word_id}`);
  return data;
};

/* DONE: as requests do histórico não estão usadas mais devido ao armazenamento no LocalStorage */
