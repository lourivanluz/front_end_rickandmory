import { useState } from "react";
import { ButtonStyled, DivStyled } from "./style";
import { MdKeyboardArrowDown } from "react-icons/md";
import { ModalDraw } from "../ModalDraw";

export const ButtonDrop = () => {
  const [show, setShow] = useState(null);
  return (
    <DivStyled>
      <ButtonStyled
        onClick={() => {
          setShow(!show);
        }}
      >
        mostrar
        <MdKeyboardArrowDown />
      </ButtonStyled>

      {show && (
        <ModalDraw>
          <li>login</li>
          <li>testando</li>
        </ModalDraw>
      )}
    </DivStyled>
  );
};
