import { LoadingProps } from "./data";
import S from "./styles";

const Loading = ({ color, width, height }: LoadingProps) => {
  return (
    <S.ContainerLoading
      className={`spinner-border ${color}`}
      role="status"
      style={{ width: width, height: height }}
    ></S.ContainerLoading>
  );
};

export default Loading;
