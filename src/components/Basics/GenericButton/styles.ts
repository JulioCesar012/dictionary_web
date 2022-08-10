import styled from "styled-components";
import { colors, space } from "~/styles";

export default {
  ContainerButton: styled.button<any>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    padding: ${space[2]}px ${space[2]}px;
    background: ${({ bg, active, typeActive }) => active === typeActive ? `${colors["verde-escuro"]}` : bg };
    border: ${({ br }) => br && `1px solid ${br}`};
    border-radius: 5px;
    color: ${colors["verde-claro"]};
    opacity: ${({ disabled }) => disabled && 0.6};
    margin-right: ${space[3]}px;

    &:last-child {
      margin-right: 0;
    }

    &:active {
      background-color: ${colors["verde-escuro"]};
    }

    a {
      text-decoration: none;
      color: ${colors["verde-claro"]};
      background: ${colors["transparent"]};
    }

    @media only screen and (max-width: 768px) {
      margin-right: ${space[1]}px;
    }
  `,
};
