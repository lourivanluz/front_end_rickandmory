import { BaseButton } from "../../Components/BaseButton";
import { ButtonDrop } from "../../Components/ButtonNew";
import { DivStyled } from "./style";

export const TestPage = () => {
  return (
    <DivStyled>
      <ButtonDrop height={"80"} width={"150"}>
        <li>teste</li>
      </ButtonDrop>
      <BaseButton title="Dashboard" />
    </DivStyled>
  );
};
