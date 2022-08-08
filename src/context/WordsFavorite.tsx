import React, {
  FC,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import useLocalStorageState from "use-local-storage-state";
import { getWordFavorite, IWordsFavoriteContext } from "~/utils";

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
  const [wordFavoriteStr, setWordFavoriteStr] = useLocalStorageState(
    "word_favorite",
    {
      defaultValue: [{ id: null, word_favorite: null }],
    }
  );
  const allWordsFavoriteStr = wordFavoriteStr;

  const readWordsFavorite = () => {
    getWordFavorite().then(({ data }) => {
      setWordFavorite(data);
    });
  };

  const addWorsFavorite = (word) => {
    const checkExisting = allWordsFavoriteStr.find(
      (item) => item.word_favorite === word
    );

    if (!checkExisting) {
      setLoading(true);
      const id = allWordsFavoriteStr.length + 1;
      setWordFavoriteStr([...wordFavoriteStr, { id: id, word_favorite: word }]);
      setWordFavorite([...wordFavoriteStr, wordFavorite]);
      setLoading(false);
    }
  };

  const removeWordFavorite = (wordId) => {
    setLoading(true);

    let newWordsFavorite = allWordsFavoriteStr.filter(function (wordLabel) {
      return wordLabel.id !== wordId;
    });
    localStorage.setItem("word_favorite", JSON.stringify(newWordsFavorite));
    setLoading(false);
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
    wordFavoriteStr,
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
