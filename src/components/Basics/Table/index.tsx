import { useEffect } from "react";
import { NotFound } from "~/components";
import { useWords, useWordsFavorite } from "~/context";
import { colors } from "~/styles";
import { DeleteIcon } from "../Icons";
import Loading from "../Loading";
import { TableProps } from "./data";
import S from "./styles";

const Table = (props: TableProps) => {
  const { searchIndexPosition, words, active, type, func, viewFunc } = props;

  const { readAllWord, loading, setType } = useWords();
  const { deleted, loading: loadingFavorite } = useWordsFavorite();
  const checkValidations = searchIndexPosition > 35;

  useEffect(() => {
    if (deleted) {
      setType("list");
      readAllWord();
    }
  }, [deleted]);

  return (
    <S.Table>
      <S.TBody loading={loading} searchIndexPosition={searchIndexPosition}>
        {!loading &&
          words.map((item, index) => (
            <>
              {item.id !== null && (
                <S.TRBody
                  key={index}
                  active={active === item}
                  type={type}
                  onClick={() =>
                    viewFunc(
                      item.word_history || item.word || item.word_favorite
                    )
                  }
                >
                  <S.TD>{item.word_history || item.word_favorite}</S.TD>

                  {type !== "list" && (
                    <S.DeleteButton onClick={() => func(item.id)}>
                      <DeleteIcon
                        color={colors["feedback-critical-error"]}
                        width={25}
                        height={25}
                      />
                    </S.DeleteButton>
                  )}
                </S.TRBody>
              )}
            </>
          ))}

        {checkValidations && (
          <S.ContentLoading>
            <Loading color={"text-success"} />
          </S.ContentLoading>
        )}
      </S.TBody>

      {(loading || loadingFavorite || deleted) && !checkValidations && (
        <Loading color={"text-success"} />
      )}

      {!words.length && !loading && (
        <S.ContentFound>
          <NotFound />
        </S.ContentFound>
      )}
    </S.Table>
  );
};

export default Table;
