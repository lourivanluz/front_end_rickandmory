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
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-family: var(--font-primary);
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${({ color = "var(--light-Color)" }) => color};
  cursor: pointer;
  border: ${({ border = "none" }) => (border === "none" ? "none" : border)};
  border-radius: ${({ borderRadius = "7" }) => borderRadius + "px"};
  overflow: hidden;
  background: transparent;
  padding: 3px 12px;
  width: ${({ width = "fit-content" }) =>
    width === "fit-content" ? "fit-content" : width + `px`};
  height: ${({ height = "fit-content" }) =>
    height === "fit-content" ? "fit-content" : height + `px`};
  z-index: 1;
  :hover {
    color: ${({ hoverColor = "white" }) => hoverColor};
    background-color: ${({ hoverBg = "none" }) => hoverBg};
  }
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
