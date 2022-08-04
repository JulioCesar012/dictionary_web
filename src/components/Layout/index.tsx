import React, { Fragment } from "react";
import Header from "../Header";
import S from "./styles";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <S.Container>{props.children}</S.Container>
    </Fragment>
  );
};

export default Layout;
