import { InputStyled } from "./Inptut";
import { Label } from "./Label";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

const DivStyled = styled.div`
  position: relative;
  width: 100%;
`;

export const InputFild = ({ register, id, ...ress }) => {
  const [input, setInput] = useState();

  useEffect(() => {
    setInput(document.getElementById(id));
  }, [id]);

  const hadleLabel = () => {
    input.focus();
  };
  return (
    <DivStyled>
      {register && <InputStyled {...ress} {...register(id)} id={id} />}
      {!register && <InputStyled {...ress} id={id} />}
      <Label htmlFor={ress.id} onClick={hadleLabel}>
        {!ress.error ? ress.name : `${ress.name} ${ress.messageerror}`}
      </Label>
    </DivStyled>
  );
};
