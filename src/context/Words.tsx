import { FC, createContext, useContext, useState, useEffect } from "react";
import { Alert } from "~/components";
import { getWord, IWordsContext, wordList } from "~/utils";

export const WordsContext = createContext<IWordsContext>({} as IWordsContext);

export const WordsProvider: FC = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const [wordPosition, setWordPosition] = useState(0);
  const [wordDefinition, setWordDefinition] = useState([]);
  const [phoneticWord, setPhoneticWord] = useState("");
  const [audioPhoneticsWord, setAudioPhoneticsWord] = useState("");

  const [wordLabel, setWordLabel] = useState("");
  const [type, setType] = useState("list");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const tabToggleType = (text) => {
    setLoading(true);
    setType(text);
    if (type) {
      setTimeout(() => {
        setLoading(false);
      }, 50);
    }
  };

  const notHasLoading = (list) => {
    if(!loading) {
      tabToggleType(list);
    }
  }

  const readWord = (label) => {
    getWord(label).then(({ data }) => {
      setLoading(false);
      if(data) {
        setWordDefinition(data[0].meanings[0].definitions[0].definition);
        setPhoneticWord(data[0].phonetic);
        setAudioPhoneticsWord(data[0].phonetics.filter(item => item.audio !== "" && item.audio !== null));
      }
    }).catch((error) => {
      if(error.response.data) {
        setError("Definição da palavra não encontrada!");
        setLoading(false);
      }
    })
  }


  const goToNextWord = (label) => {
    setLoading(true);
    setWordPosition(wordPosition + 1);
    setWordLabel(label);
    setError("");
  }

  const goBackToPreviousWord = () => {
    setError("");
    if(wordPosition === 0) {
      setWordPosition(wordPosition);
      return;
    }
    setWordPosition(wordPosition - 1);
  }

  useEffect(() => {
    if(type) {
      setTimeout(() => {
        setLoading(false);
      }, 250);
    }
  }, [type]);

  useEffect(() => {
    if(wordLabel) {
      readWord(wordLabel);
    }
  }, [wordLabel]);

  const searchIndexPosition = wordList.find(
    (element, index) => index === wordPosition
  );

  useEffect(() => {
    setWordLabel(searchIndexPosition);
    if (wordPosition <= 0) {
      getWord(searchIndexPosition).then(({ data }) => {
        if(data) {
          setWordDefinition(data[0].meanings[0].definitions[0].definition);
          setPhoneticWord(data[0].phonetic);
          setAudioPhoneticsWord(data[0].phonetics.filter(item => item.audio !== "" && item.audio !== null));
        }
      });
    }
  }, [wordPosition, error]);

  useEffect(() => {}, [audioPhoneticsWord])

  const value = {
    tabToggleType,
    type,
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
    notHasLoading
  };

  return (
    <WordsContext.Provider value={value}>{children}</WordsContext.Provider>
  );
};

export function useWords(): IWordsContext {
  return useContext(WordsContext);
}
