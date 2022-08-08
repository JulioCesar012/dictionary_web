import { FC, createContext, useContext, useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";

import { getAllWords, getWord, IWordsContext } from "~/utils";

type Words = {
  children: React.ReactNode;
};

export const WordsContext = createContext<IWordsContext>({} as IWordsContext);

export const WordsProvider: FC = ({ children }: Words) => {
  const [mounted, setMounted] = useState(false);
  const [words, setWords] = useState([]);
  const [wordHistory, setWordHistory] = useState([]);
  const [wordHistoryStr, setWordHistoryStr] = useLocalStorageState(
    "word_history",
    { defaultValue: [{ id: null, word_history: null }] }
  );

  const listStr = wordHistoryStr;

  const [wordPosition, setWordPosition] = useState(0);
  const [wordDefinition, setWordDefinition] = useState([]);
  const [phoneticWord, setPhoneticWord] = useState("");
  const [audioPhoneticsWord, setAudioPhoneticsWord] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [wordLabel, setWordLabel] = useState(null);
  const [type, setType] = useState("list");
  const [error, setError] = useState("");

  const [visibleTables, setVisibleTables] = useState(false);
  const [resizeScreen, setResizeScreen] = useState(
    typeof window !== "undefined" && window.innerWidth <= 768 ? true : false
  );

  const [loading, setLoading] = useState(true);

  const tabToggleType = (text) => {
    setLoading(true);
    setType(text);
    if (type) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  const toggleTabMobile = () => {
    setVisibleTables(!visibleTables ? true : false);
  };

  const notHasLoading = (list) => {
    if (!loading) {
      tabToggleType(list);
    }
  };

  const readAllWord = () => {
    getAllWords(currentPage).then(({ data }) => {
      setWords([...words, ...data]);
    });
  };

  const readWord = (label) => {
    getWord(label)
      .then(({ data }) => {
        setLoading(false);
        if (data) {
          setWordDefinition(data[0].meanings[0].definitions[0].definition);
          setPhoneticWord(data[0].phonetic);
          setAudioPhoneticsWord(
            data[0].phonetics.filter(
              (item) => item.audio !== "" && item.audio !== null
            )
          );
        }
      })
      .catch((error) => {
        if (error.response.data) {
          setError("Definição da palavra não encontrada!");
          setLoading(false);
        }
      });
  };

  const createWordHistory = (word) => {
    const id = wordHistory.length + 1;
    setWordHistoryStr([...wordHistoryStr, { id: id, word_history: word }]);
    setWordHistory([...wordHistoryStr, wordHistory]);
  };

  const viewWordHistory = (label) => {
    setWordLabel(label);
    setVisibleTables(false);
    setPhoneticWord("");
    getWord(label).then(({ data }) => {
      if (data) {
        setWordDefinition(data[0].meanings[0].definitions[0].definition);
        setPhoneticWord(data[0].phonetic);
        setAudioPhoneticsWord(
          data[0].phonetics.filter(
            (item) => item.audio !== "" && item.audio !== null
          )
        );
      }
    });
  };

  const removeWordHistory = (wordId) => {
    setLoading(true);

    let newWordsHistory = listStr.filter(function (wordLabel) {
      return wordLabel.id !== wordId;
    });
    localStorage.setItem("word_history", JSON.stringify(newWordsHistory));
    setLoading(false);
  };

  const goToNextWord = (label) => {
    setLoading(true);
    setWordPosition(wordPosition + 1);
    setWordLabel(label);

    const checkExisting = listStr.find((item) => item.word_history === label);

    if (!checkExisting) {
      setLoading(true);
      createWordHistory(label);
    }
    setError("");
  };

  const goBackToPreviousWord = () => {
    setError("");
    if (wordPosition === 0) {
      setWordPosition(wordPosition);
      return;
    }
    setWordPosition(wordPosition - 1);
  };

  const checkSize = () => {
    setResizeScreen(window.innerWidth <= 768 ? true : false);
  };

  useEffect(() => {
    if (type) {
      setTimeout(() => {
        setLoading(false);
      }, 250);
    }
  }, [type]);

  useEffect(() => {
    if (wordPosition) {
      readWord(wordLabel);
    }
  }, [wordLabel]);

  const searchIndexPosition = words.find(
    (element, index) => index === wordPosition
  );

  useEffect(() => {
    setWordLabel(searchIndexPosition);
    if (wordPosition <= 0) {
      getWord(searchIndexPosition).then(({ data }) => {
        if (data) {
          setWordDefinition(data[0].meanings[0].definitions[0].definition);
          setPhoneticWord(data[0].phonetic);
          setAudioPhoneticsWord(
            data[0].phonetics.filter(
              (item) => item.audio !== "" && item.audio !== null
            )
          );
        }
      });
    }
  }, [wordPosition, words, error]);

  useEffect(() => {
    if (currentPage) {
      readAllWord();
    }
  }, [currentPage]);

  useEffect(() => {
    window.addEventListener("resize", checkSize);
  }, [resizeScreen]);

  const value = {
    tabToggleType,
    type,
    setType,
    loading,
    wordPosition,
    setWordPosition,
    goToNextWord,
    goBackToPreviousWord,
    wordLabel,
    setWordLabel,
    readWord,
    error,
    wordDefinition,
    setWordDefinition,
    mounted,
    setMounted,
    searchIndexPosition,
    phoneticWord,
    audioPhoneticsWord,
    notHasLoading,
    readAllWord,
    words,
    currentPage,
    setCurrentPage,
    wordHistory,
    viewWordHistory,
    removeWordHistory,
    resizeScreen,
    visibleTables,
    toggleTabMobile,
    listStr,
  };

  return (
    <WordsContext.Provider value={value}>{children}</WordsContext.Provider>
  );
};

export function useWords(): IWordsContext {
  return useContext(WordsContext);
}
