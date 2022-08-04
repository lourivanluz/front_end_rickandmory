import { DivStyled } from "./style";
import { MdKeyboardArrowDown } from "react-icons/md";
import { ModalDraw } from "../ModalDraw";
import { BaseButton } from "../BaseButton";

export const ButtonDrop = ({ children, ...ress }) => {
  return (
    <DivStyled>
      <BaseButton {...ress}>
        <MdKeyboardArrowDown />
      </BaseButton>

      {ress.show && <ModalDraw {...ress}>{children}</ModalDraw>}
    </DivStyled>
  );
};
