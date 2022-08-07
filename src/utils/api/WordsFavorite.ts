import { API_JSON_SERVER } from "./API";

export const getWordFavorite = async (): Promise<any> => {
  const data = await API_JSON_SERVER.get("/words_favorite");
  return data;
};

export const postWordFavorite = async (favorite: string): Promise<any> => {
  const data = await API_JSON_SERVER.post("/words_favorite", { favorite });
  return data;
};

export const deleteWordFavorite = async (word_id: number): Promise<any> => {
  const data = await API_JSON_SERVER.delete(`/words_favorite/${word_id}`);
  return data;
};
