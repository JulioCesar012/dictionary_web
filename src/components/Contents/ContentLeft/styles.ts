import styled from "styled-components";
import { colors, space } from "~/styles";

export default {
  TabMobile: styled.button`
    border: 0;
    top: 0;
    margin-bottom: ${space[3]}px;
    background: ${colors["transparent"]};
  `,
  Card: styled.div<any>`
    &:first-child {
      padding-right: 25px;
    }

    @media only screen and (max-width: 576px) {
      &:first-child {
        margin-top: 0 !important;
      }
    }

    @media only screen and (max-width: 768px) {
      display: ${({ visibleTables }) => (visibleTables ? "none" : "block")};
      &:first-child {
        padding-right: 0;
        margin-top: -${space[5]}px;
      }
    }
  `,
  WordContent: styled.div<any>`
    width: 100%;
    height: ${({ height }) => height};
    background: ${({ bg }) => bg};
    border: ${({ borderColor }) => borderColor};
    z-index: 3000;
    padding: 20px;
    text-align: center;
    border-radius: ${space[1]}px;
  `,
  Words: styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    align-content: center;
    justify-content: center;
    background: ${colors["transparent"]};
  `,
  Label: styled.strong`
    background: ${colors["transparent"]};
    color: ${colors["white/neutral-0"]};
    margin-bottom: ${space[2]}px;
    font-size: 25px;
  `,
  AudioContent: styled.div`
    padding: ${space[4]}px 0;

    margin-top: ${space[5]}px;
    background-color: ${colors["background/cinza"]};

    @media only screen and (max-width: 768px) {
      margin-right: 0;
    }
  `,
  ActionsBelow: styled.div`
    margin-top: ${space[6]}px;
  `,
  Title: styled.h4``,
  DescriptionVerb: styled.p`
    margin-top: ${space[3]}px;
    color: ${colors["white/neutral-0"]};
    white-space: pre-wrap;
  `,
  ButtonGroup: styled.div`
    width: 100%;
    display: flex;
    padding-right: 25px;
    margin-top: ${space[4]}px;

    @media only screen and (max-width: 768px) {
      padding-right: 0;
      margin-bottom: ${space[5]}px;
    }
  `,
};
