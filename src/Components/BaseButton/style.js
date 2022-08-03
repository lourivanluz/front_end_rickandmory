import styled, { keyframes } from "styled-components";

const ripple = keyframes`
    0%{
        width: 1px;
        height: 1px;
        opacity: 0.5;
    }
    
    100%{
        width: 500px;
        height: 500px;
        opacity: 0;
    }
    
`;

export const ButtonStyled = styled.button`
  position: relative;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  border: none;
  overflow: hidden;
  background: transparent;
  color: var(--light-Color);
  padding: 30px 60px;
  border: blue 1px solid;
  z-index: 1;
  .circle {
    position: absolute;
    border-radius: 50%;
    background-color: #fff;
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: 7;
  }
  .circle-active {
    animation: ${ripple} 0.5s ease-in;
  }
`;
