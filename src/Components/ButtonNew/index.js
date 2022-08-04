import { useState } from "react";
import { ButtonStyled, DivStyled } from "./style";
import { MdKeyboardArrowDown } from "react-icons/md";
import { ModalDraw } from "../ModalDraw";
import { BaseButton } from "../BaseButton";

export const ButtonDrop = ({ children, ...ress }) => {
  const [show, setShow] = useState(null);
  return (
    <DivStyled>
      <BaseButton {...ress} set={setShow} show={show}>
        Mostrar
        <MdKeyboardArrowDown />
      </BaseButton>

      {show && <ModalDraw {...ress}>{children}</ModalDraw>}
    </DivStyled>
  );
};
