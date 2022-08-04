import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    to{
        transform: rotate(360deg);
    }
`;

const grow = keyframes`
 
 50%{
    transform: scale(1);
 }

`;

export const DivStyled = styled.div`
  width: 10px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${rotate} 2s linear infinite;
  transform-origin: bottom center;
  margin-left: 5px;

  .animate {
    height: 7px;
    width: 7px;
    background-color: var(--light-Color);
    border-radius: 50%;
    transform: scale(0);
    animation: ${grow} 1s linear infinite;
    margin: -7px;
  }
  .animate:nth-child(2) {
    background-color: var(--dark-Color);
    animation-delay: 0.5s;
  }
`;
