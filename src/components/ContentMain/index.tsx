import S from "./styles";
import { Col, Container, Row } from "reactstrap";
import { Alert, Loading, ContentLeft, ContentRight } from "~/components";

import { useWords } from "~/context";
import { useEffect } from "react";

const WordCard = () => {
  const { error, wordDefinition, mounted, setMounted, audioPhoneticsWord } =
    useWords();

  const { wordPosition, readWord, wordLabel } = useWords();

  useEffect(() => {
    if (wordPosition) {
      readWord(wordLabel);
    }
  }, [wordLabel]);

  useEffect(() => setMounted(true), []);
  if (!mounted || !wordDefinition || !audioPhoneticsWord)
    return (
      <S.ContentLoading id="loading">
        <Loading color={"text-success"} />
      </S.ContentLoading>
    );

  return (
    <S.ContainerWordCard>
      {error && <Alert error={error} />}
      <Container>
        <Row>
          <Col lg={5} md={5}>
            <ContentLeft />
          </Col>

          <Col lg={7} md={7}>
            <ContentRight />
          </Col>
        </Row>
      </Container>
    </S.ContainerWordCard>
  );
};

export default WordCard;
