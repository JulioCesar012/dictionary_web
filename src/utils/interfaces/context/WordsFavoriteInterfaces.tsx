export interface IWordsFavoriteContext {
    readWordsFavorite: () => void;
    addWorsFavorite(word: string): void;
    removeWordFavorite(wordId): void;
    wordFavorite: object[];
    deleted: boolean;
    setDeleted: any;
}