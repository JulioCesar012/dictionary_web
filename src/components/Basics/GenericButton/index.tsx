import Link from "next/link";
import { useWords } from "~/context";
import { GenericButtonProps } from "./data";
import S from "./styles";

const GenericButton = ({ title, width, height, bg, br, func }: GenericButtonProps) => {
  const { loading } = useWords();

  return (
    <S.ContainerButton
      width={width}
      height={height}
      bg={bg}
      br={br}
      onClick={func}
      disabled={loading}
      title={title}
    >
      <Link href="">{title}</Link>
    </S.ContainerButton>
  );
};

export default GenericButton;
