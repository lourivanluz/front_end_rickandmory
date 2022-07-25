import { InputStyled } from "./Inptut";
import { Label } from "./Label";
import styled from "styled-components";

const DivStyled = styled.div`
  position: relative;
  width: 100%;
`;

export const InputFild = ({ register, id, ...ress }) => {
  return (
    <DivStyled>
      {register && <InputStyled {...ress} {...register(id)} />}
      {!register && <InputStyled {...ress} />}
      <Label htmlFor={ress.id}>
        {!ress.error ? ress.name : `${ress.name} ${ress.messageerror}`}
      </Label>
    </DivStyled>
  );
};
