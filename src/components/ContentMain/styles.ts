import styled from "styled-components";
import { colors, space } from "~/styles";

export default {
  ContainerWordCard: styled.section`
    margin-bottom: ${space[3]}px;
  `,
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
      display: ${({ visibleTables }) => (visibleTables ? "none" : "block")};
      &:first-child {
        margin-top: 0 !important;
      }
    }

    @media only screen and (max-width: 768px) {
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
  FavoriteButton: styled.button`
    border: 0;
    background: ${colors["transparent"]};

    svg {
      position: absolute;
    }
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

  WordList: styled.div<any>`
    @media only screen and (max-width: 768px) {
      display: ${({ visibleTables }) => (visibleTables ? "block" : "none")};
    }
  `,
  ActionsTable: styled.div`
    display: flex;
    margin-bottom: ${space[2]}px;
  `,
  ContentLoading: styled.div`
    text-align: center;
    margin-top: ${space[6]}px;
  `,
};
