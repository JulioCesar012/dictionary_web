/* eslint-disable react/no-unescaped-entities */
import S from "./styles";
import { Col, Container, Row } from "reactstrap";
import { Alert, GenericButton, Loading, Slider } from "~/components";
import { colors } from "~/styles";
import WordTable from "../WordTable";

import { wordList } from "~/utils";
import { useWords } from "~/context";
import { useEffect } from "react";

const WordCard = () => {
  const {
    notHasLoading,
    type,
    loading,
    goToNextWord,
    goBackToPreviousWord,
    wordLabel,
    error,
    wordDefinition,
    mounted,
    setMounted,
    searchIndexPosition,
    phoneticWord,
    audioPhoneticsWord,
  } = useWords();

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
            <S.Card>
              <S.WordContent
                height={"300px"}
                bg={colors["azul-escuro/secondary-base"]}
                borderColor={`1px solid ${colors["verde-claro"]}`}
              >
                <S.Words>
                  <S.Label>{searchIndexPosition}</S.Label>
                  <S.Label>{phoneticWord}</S.Label>
                </S.Words>
              </S.WordContent>
            </S.Card>

            {audioPhoneticsWord[0] && (
              <S.AudioContent>
                <Slider path={audioPhoneticsWord} />
              </S.AudioContent>
            )}

            <S.ActionsBelow>
              <S.Title>Meanings</S.Title>

              <S.DescriptionVerb>Verb - {wordDefinition}</S.DescriptionVerb>

              <S.ButtonGroup>
                <GenericButton
                  title="Voltar"
                  width={"100%"}
                  height={80}
                  bg={colors["transparent"]}
                  func={() => goBackToPreviousWord()}
                />
                <GenericButton
                  title="Próximo"
                  width={"100%"}
                  height={80}
                  bg={colors["transparent"]}
                  func={() => goToNextWord(searchIndexPosition)}
                />
              </S.ButtonGroup>
            </S.ActionsBelow>
          </Col>

          <Col lg={7} md={7}>
            <S.WordList>
              <S.ActionsTable>
                <GenericButton
                  title="Word List"
                  width={"100%"}
                  height={50}
                  bg={colors["transparent"]}
                  func={() => notHasLoading("list")}
                />

                <GenericButton
                  title="Favorites"
                  width={"100%"}
                  height={50}
                  bg={colors["transparent"]}
                  func={() => notHasLoading("favorites")}
                />
              </S.ActionsTable>

              <S.WordContent
                height={"500px"}
                bg={colors["azul-escuro/secondary-base"]}
                borderColor={`1px solid ${colors["verde-claro"]}`}
              >
                <WordTable
                  words={wordList}
                  type={type}
                  loading={loading}
                  active={wordLabel || searchIndexPosition}
                />
              </S.WordContent>
            </S.WordList>
          </Col>
        </Row>
      </Container>
    </S.ContainerWordCard>
  );
};

export default WordCard;
