import S from "./styles";
import { toast, ToastContainer } from "react-toastify";

const Alert = ({ error }) => {
  return (
    <S.ContainerAlert>
      <ToastContainer />
      {toast.error(`${error}`, {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      })}
      <ToastContainer />
    </S.ContainerAlert>
  );
};

export default Alert;
