import { Container } from "reactstrap";
import S from "./styles";

const Header = () => {
  return (
    <S.Header>
      <Container>
        <S.Wrapper>
          <S.Logo>
            <S.Title>
              <S.SlugTitle>Dicti</S.SlugTitle>onary
            </S.Title>
          </S.Logo>
        </S.Wrapper>
      </Container>
    </S.Header>
  );
};

export default Header;
