import styled from "styled-components";

export const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ButtonStyled = styled.button`
  width: ${({ width = "80" }) => `${width}px`};
  height: ${({ height = "30" }) => `${height}px`};
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
