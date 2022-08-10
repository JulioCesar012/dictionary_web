import {
  CloseIcon,
  GenericButton,
  ListIcon,
  Loading,
  Slider,
  StarIcon,
} from "~/components/Basics";
import { useWords, useWordsFavorite } from "~/context";
import { colors } from "~/styles";
import S from "./styles";

const ContentLeft = () => {
  const {
    loading,
    goToNextWord,
    goBackToPreviousWord,
    wordLabel,
    wordDefinition,
    searchIndexPosition,
    phoneticWord,
    audioPhoneticsWord,
    resizeScreen,
    visibleTables,
    toggleTabMobile,
  } = useWords();

  const { addWorsFavorite, loading: loadingFavorite } = useWordsFavorite();

  return (
    <>
      {resizeScreen && (
        <S.TabMobile onClick={() => toggleTabMobile()}>
          {visibleTables ? (
            <CloseIcon
              colors={colors["white/neutral-0"]}
              width={30}
              height={30}
            />
          ) : (
            <ListIcon
              color={colors["white/neutral-0"]}
              width={30}
              height={30}
            />
          )}
        </S.TabMobile>
      )}
      <S.Card visibleTables={visibleTables}>
        <S.WordContent
          height={"300px"}
          bg={colors["azul-escuro/secondary-base"]}
          borderColor={`1px solid ${colors["verde-claro"]}`}
        >
          <S.Words>
            {loading || !searchIndexPosition ? (
              <Loading color={"text-success"} />
            ) : (
              <>
                <S.Label>{wordLabel}</S.Label>
                <S.Label>
                  {!phoneticWord ? (
                    <Loading color={"text-success"} />
                  ) : (
                    phoneticWord
                  )}
                </S.Label>
              </>
            )}
          </S.Words>
        </S.WordContent>

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
              br={colors["verde-claro"]}
              func={() => goBackToPreviousWord()}
              active={null}
            />
            <GenericButton
              title="Próximo"
              width={"100%"}
              height={80}
              bg={colors["transparent"]}
              br={colors["verde-claro"]}
              func={() => goToNextWord(searchIndexPosition)}
              active={null}
            />

            <GenericButton
              title={
                loading || loadingFavorite ? (
                  <Loading color={"text-warning"} width={20} height={20} />
                ) : (
                  <StarIcon color={colors["feedback-warning"]} />
                )
              }
              width={"40%"}
              height={80}
              bg={colors["transparent"]}
              br={colors["feedback-warning"]}
              func={() => addWorsFavorite(wordLabel)}
              active={null}
            />
          </S.ButtonGroup>
        </S.ActionsBelow>
      </S.Card>
    </>
  );
};

export default ContentLeft;
