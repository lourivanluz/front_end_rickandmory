import { ModalDrawContainer } from "./style";

export const ModalDraw = ({ children }) => {
  return (
    <ModalDrawContainer>
      <ul>{children}</ul>
    </ModalDrawContainer>
  );
};
