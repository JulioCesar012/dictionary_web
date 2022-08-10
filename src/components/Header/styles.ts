import styled from "styled-components";
import { colors, space } from "~/styles";

export default {
  Header: styled.header`
    width: 100%;
    height: 80px;
    line-height: 80px;
    border-bottom: 1px solid ${colors["cinza/neutral"]};
  `,
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: ${space[2]}px;
  `,

  Logo: styled.div``,
  Title: styled.h1`
    font-size: 2rem;
    margin-bottom: 0;
    font-weight: 450;

    @media only screen and (max-width: 992px) {
      font-size: 1.3rem;
      margin-top: calc(${space[1]}px + 5px);
    }
  `,
  SlugTitle: styled.span`
    color: ${colors["verde-claro"]};
    font-weight: 600;
  `,
};
