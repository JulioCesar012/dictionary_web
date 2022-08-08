export interface IWordsFavoriteContext {
  addWorsFavorite(word: string): void;
  removeWordFavorite(wordId): void;
  deleted: boolean;
  setDeleted: any;
  loading: boolean;
  wordFavoriteStr: any;
}
