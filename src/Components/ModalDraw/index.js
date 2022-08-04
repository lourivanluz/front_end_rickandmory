import { ModalDrawContainer } from "./style";

export const ModalDraw = ({ children, ...ress }) => {
  return (
    <ModalDrawContainer {...ress}>
      <ul>{children}</ul>
    </ModalDrawContainer>
  );
};
