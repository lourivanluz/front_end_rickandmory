import { BaseButton } from "../../Components/BaseButton";
import { ButtonDrop } from "../../Components/ButtonNew";
import { DivStyled } from "./style";

export const TestPage = () => {
  return (
    <DivStyled>
      <ButtonDrop />
      <BaseButton title="Dashboard" />
    </DivStyled>
  );
};
