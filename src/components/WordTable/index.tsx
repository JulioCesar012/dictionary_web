import { Loading } from "~/components/Basics";
import S from "./styles";

const WordTable = ({ words, type, loading, active }) => {
  return (
    <S.Table>
      {type === "list" && (
        <S.TBody loading={loading}>
          {!loading &&
            words.map((item, index) => (
              <S.TRBody key={index} active={active === item}>
                {type === "list" ? <S.TD>{item}</S.TD> : <h1></h1>}
              </S.TRBody>
            ))}
        </S.TBody>
      )}
      {loading && <Loading color={"text-success"} />}
    </S.Table>
  );
};

export default WordTable;
