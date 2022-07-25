import { Label } from "./Label";
import { TextAreaSyled } from "./TextArea";
import styled from "styled-components";

const DivStyled = styled.div`
  position: relative;
  width: 100%;
`;

export const TextAreaFild = ({ register, ...rest }) => {
  return (
    <DivStyled>
      <TextAreaSyled rows="5" {...rest} {...register(rest.id)} />
      <Label htmlFor={rest.id}>{rest.name}</Label>
    </DivStyled>
  );
};
