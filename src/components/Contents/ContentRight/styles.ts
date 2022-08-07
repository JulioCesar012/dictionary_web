import styled from "styled-components";
import { space } from "~/styles";

export default {
  WordList: styled.div<any>`
    @media only screen and (max-width: 768px) {
      display: ${({ visibleTables }) => (visibleTables ? "block" : "none")};
    }
  `,
  ActionsTable: styled.div`
    display: flex;
    margin-bottom: ${space[2]}px;
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
};
