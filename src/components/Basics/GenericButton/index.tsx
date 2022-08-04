import Link from "next/link";
import { useWords } from "~/context";
import S from "./styles";

const GenericButton = ({ title, width, height, bg, func }) => {
  const { loading } = useWords();

  return (
    <S.ContainerButton
      width={width}
      height={height}
      bg={bg}
      onClick={func}
      disabled={loading}
    >
      <Link href="">{title}</Link>
    </S.ContainerButton>
  );
};

export default GenericButton;
