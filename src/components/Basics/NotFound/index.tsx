import { colors } from "~/styles";
import { CardText } from "..";
import S from "./styles";

const NotFound = () => {
  return (
    <S.ContainerNotFound>
      <CardText color={colors["white/neutral-0"]} width={35} height={35} />&nbsp; Nem
      resultado encontrado
    </S.ContainerNotFound>
  );
};

export default NotFound;
