import { useLayoutEffect } from "react";
import { NotFound } from "~/components";
import { useWords, useWordsFavorite } from "~/context";
import { colors } from "~/styles";
import { DeleteIcon } from "../Icons";
import Loading from "../Loading";
import { TableProps } from "./data";
import S from "./styles";

const Table = (props: TableProps) => {
  const {
    loading,
    searchIndexPosition,
    words,
    active,
    type,
    lastRef,
    func,
    viewFunc,
  } = props;

  const { readWordHistory } = useWords();
  const { readWordsFavorite, setDeleted } = useWordsFavorite();

  useLayoutEffect(() => {
    setDeleted(false);
    if (type === "history") {
      readWordHistory();
    }

    if (type === "favorites") {
      readWordsFavorite();
    }
  }, []);

  return (
    <S.Table>
      <S.TBody loading={loading} searchIndexPosition={searchIndexPosition}>
        {!loading &&
          words.map((item, index) => (
            <S.TRBody
              key={index}
              active={active === item}
              type={type}
              onClick={() =>
                viewFunc(item.word_history || item.word || item.favorite)
              }
            >
              <S.TD>{item.word_history || item.favorite}</S.TD>

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
          ))}

        {(searchIndexPosition > 35 || loading) && (
          <S.ContentLoading ref={lastRef}>
            <Loading color={"text-success"} />
          </S.ContentLoading>
        )}
      </S.TBody>

      {!words.length && (
        <S.ContentFound>
          <NotFound />
        </S.ContentFound>
      )}
    </S.Table>
  );
};

export default Table;
