import { InfinitySpin } from "react-loader-spinner";
import * as S from "./style";

const ModalSpinner = () => {
  return (
    <S.Container>
      <InfinitySpin width="200" color="#fff" />
    </S.Container>
  );
};

export default ModalSpinner;
