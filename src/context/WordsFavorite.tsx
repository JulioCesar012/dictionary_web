import React, {
  FC,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import {
  deleteWordFavorite,
  getWordFavorite,
  IWordsFavoriteContext,
  postWordFavorite,
} from "~/utils";

type WordsFavorite = {
  children: React.ReactNode;
};

export const WordsFavoriteContext = createContext<IWordsFavoriteContext>(
  {} as IWordsFavoriteContext
);

export const WordsFavoriteProvider: FC = ({ children }: WordsFavorite) => {
  const [wordFavorite, setWordFavorite] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [loading, setLoading] = useState(false);

  const allWordsFavorite = wordFavorite.map((item) => item);

  const readWordsFavorite = () => {
    getWordFavorite().then(({ data }) => {
      setWordFavorite(data);
    });
  };

  const addWorsFavorite = (word) => {
    const checkExisting = allWordsFavorite.find(
      (item) => item.favorite === word
    );

    if (!checkExisting) {
      setLoading(true);
      postWordFavorite(word).then(({ data }) => {
        setWordFavorite([...wordFavorite, data]);
        setLoading(false);
      });
    }
  };

  const removeWordFavorite = (wordId) => {
    setLoading(true);
    setDeleted(true);
    deleteWordFavorite(wordId).then(({}) => {
      setLoading(false);
    });
  };

  useEffect(() => {
    setDeleted(false);
  }, [deleted]);

  const value = {
    readWordsFavorite,
    addWorsFavorite,
    wordFavorite,
    removeWordFavorite,
    deleted,
    setDeleted,
    loading,
  };

  return (
    <WordsFavoriteContext.Provider value={value}>
      {children}
    </WordsFavoriteContext.Provider>
  );
};

export function useWordsFavorite(): IWordsFavoriteContext {
  return useContext(WordsFavoriteContext);
}
