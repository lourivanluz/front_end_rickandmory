import styled from "styled-components";
import { BaseButton } from "../../Components/BaseButton";

export const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: var(--light-Color);
`;

export const ContainerSave = styled.div`
  height: 30px;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 6;
  position: sticky;
  top: 53px;
  margin: 0 auto;
  background-color: var(--midleDark-Color);
  border-radius: 0px 0px 5px 5px;
  box-shadow: 0px 5px 9px -2px rgba(5, 5, 5, 0.41);
`;

export const ButtonSave = styled(BaseButton)`
  color: var(--light-Color);
`;

export const PageButtonLeft = styled.div`
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  font-size: 30px;
  padding: 5px;
  border-radius: 2px;
  border: none;
  background-color: transparent;
  position: absolute;
  left: 80px;
  top: 50%;
  cursor: pointer;
`;

export const PageButtonRight = styled.div`
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  font-size: 30px;
  padding: 5px;
  border-radius: 2px;
  border: none;
  background-color: transparent;
  position: absolute;
  right: 80px;
  top: 50%;
  cursor: pointer;
`;

export const NaveButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  color: var(--light-Color);
  cursor: pointer;
  :hover {
    color: white;
  }
`;
