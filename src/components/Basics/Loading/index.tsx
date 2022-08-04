import S from "./styles";

const Loading = ({ color }) => {
  return (
    <S.ContainerLoading
      className={`spinner-border ${color}`}
      role="status"
    ></S.ContainerLoading>
  );
};

export default Loading;
