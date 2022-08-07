import { GenericButton, Table } from "~/components/Basics";
import WordTable from "~/components/WordTable";
import { useWords, useWordsFavorite } from "~/context";
import { colors } from "~/styles";
import S from "./styles";

const ContentRight = () => {
  const {
    notHasLoading,
    type,
    wordLabel,
    searchIndexPosition,
    words,
    wordHistory,
    visibleTables,
    viewWordHistory,
    removeWordHistory,
  } = useWords();

  const { removeWordFavorite, wordFavorite } = useWordsFavorite();

  return (
    <S.WordList visibleTables={visibleTables}>
      <S.ActionsTable>
        <GenericButton
          title="Word List"
          width={"100%"}
          height={50}
          bg={colors["transparent"]}
          br={colors["verde-claro"]}
          func={() => notHasLoading("list")}
        />

        <GenericButton
          title="History"
          width={"100%"}
          height={50}
          bg={colors["transparent"]}
          br={colors["verde-claro"]}
          func={() => notHasLoading("history")}
        />

        <GenericButton
          title="Favorites"
          width={"100%"}
          height={50}
          bg={colors["transparent"]}
          br={colors["verde-claro"]}
          func={() => notHasLoading("favorites")}
        />
      </S.ActionsTable>

      <S.WordContent
        height={"500px"}
        bg={colors["azul-escuro/secondary-base"]}
        borderColor={`1px solid ${colors["verde-claro"]}`}
      >
        {type === "list" && (
          <WordTable words={words} active={wordLabel || searchIndexPosition} />
        )}

        {type === "history" && (
          <Table
            words={wordHistory.map((item) => item)}
            active={wordLabel || searchIndexPosition}
            type={type}
            func={removeWordHistory}
            viewFunc={viewWordHistory}
            searchIndexPosition={wordHistory.length}
          />
        )}

        {type === "favorites" && (
          <Table
            words={wordFavorite.map((item) => item)}
            active={wordLabel || searchIndexPosition}
            type={type}
            func={removeWordFavorite}
            viewFunc={viewWordHistory}
            searchIndexPosition={wordFavorite.length}
          />
        )}
      </S.WordContent>
    </S.WordList>
  );
};

export default ContentRight;
