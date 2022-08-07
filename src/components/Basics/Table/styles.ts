import styled from "styled-components";
import { colors, space } from "~/styles";

export default {
  Table: styled.table`
    width: 100%;
    color: ${colors["white/neutral-0"]};
    background: ${colors["transparent"]};
    height: 500px;
  `,
  TBody: styled.tbody<any>`
    width: 100%;
    overflow: scroll;
    height: ${({ loading, searchIndexPosition }) =>
      loading ? 0 : searchIndexPosition < 20 ? "fit-content" : "100%"};
    max-height: calc(100% - 5%);
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: ${space[1]}px;
    background: ${colors["transparent"]};
    overflow-x: hidden;

    ::-webkit-scrollbar {
      width: ${space[1]}px;

      background: ${colors["transparent"]};
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 0;
      background: ${colors["cinza/neutral"]};
    }

    @media only screen and (max-width: 1190px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 1400px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media only screen and (max-width: 990px) {
      grid-template-columns: repeat(2, 1fr);
    }
  `,
  TRBody: styled.tr<any>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ddd;
    padding: 8px;

    ${({ type }) =>
      (type === "history" || type === "favorites") &&
      `
   background: ${colors["transparent"]}
 `}
  `,
  TD: styled.td`
    background: ${colors["transparent"]};
    border: 0;

    &:hover {
      cursor: pointer;
    }
  `,
  ContentLoading: styled.div`
    margin-top: ${space[2]}px;
  `,
  DeleteButton: styled.button`
    border: 0;
    background: ${colors["transparent"]};
  `,
  ContentFound: styled.div`
    height: 100%;
  `,
};
