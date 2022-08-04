/* eslint-disable import/no-anonymous-default-export */
import styled from "styled-components";
import { colors, space } from "~/styles";

export default {
  ContainerButton: styled.button<any>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    padding: ${space[2]}px ${space[2]}px;
    background: ${({ bg }) => bg};
    border: 1px solid ${colors["verde-claro"]};
    border-radius: 5px;
    color: ${colors["verde-claro"]};
    opacity: ${({ disabled }) => disabled && 0.6};

    &:first-child {
      margin-right: ${space[3]}px;
    }

    &:active {
      background-color: ${colors["verde-escuro"]};
    }

    a {
      text-decoration: none;
      color: ${colors["verde-claro"]};
      background: ${colors["transparent"]};
    }
  `,
};
