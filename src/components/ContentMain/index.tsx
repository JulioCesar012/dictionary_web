import S from "./styles";
import { Col, Container, Row } from "reactstrap";
import { Alert, Loading, ContentLeft, ContentRight } from "~/components";

import { useWords, useWordsFavorite } from "~/context";
import { useEffect } from "react";

const WordCard = () => {
  const {
    error,
    wordDefinition,
    mounted,
    setMounted,
    audioPhoneticsWord,
    setType,
    readAllWord,
  } = useWords();

  const { deleted } = useWordsFavorite();

  useEffect(() => {
    if (deleted) {
      setTimeout(() => {
        // setType("list");
        readAllWord();
      }, 1000);
    }
  }, [deleted]);

  useEffect(() => setMounted(true), []);
  if (!mounted || !wordDefinition || !audioPhoneticsWord)
    return (
      <S.ContentLoading id="teste">
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
