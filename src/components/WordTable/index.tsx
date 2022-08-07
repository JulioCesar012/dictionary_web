import { useEffect, useRef } from "react";
import { Loading } from "~/components/Basics";
import { useWords } from "~/context";
import S from "./styles";

const WordTable = ({ words, loading, active }) => {
  const lastRef = useRef(null);

  const { setCurrentPage, type } = useWords();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entities) => {
      const target = entities[0];

      if (target.isIntersecting) {
        setCurrentPage((old) => old + 1);
      }
    }, options);

    if (lastRef.current) {
      observer.observe(lastRef.current);
    }
  }, []);

  return (
    <S.Table>
      {type === "list" && (
        <S.TBody loading={loading}>
          {!loading &&
            words.map((item, index) => (
              <S.TRBody key={index} active={active === item}>
                <S.TD>{item}</S.TD>
              </S.TRBody>
            ))}
          <S.ContentLoading ref={lastRef}>
            <Loading color={"text-success"} />
          </S.ContentLoading>
        </S.TBody>
      )}

      {loading && <Loading color={"text-success"} />}
    </S.Table>
  );
};

export default WordTable;
