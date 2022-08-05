import styled from "styled-components";

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 30;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(5, 5, 5, 0.41);
`;

export const Dialog = styled.div`
  width: 310px;
  height: 220px;
  background-color: white;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  position: relative;
  border-radius: 5px;
  font-size: 20px;
  .buttons {
    width: 100%;
    display: flex;
    justify-content: space-around;
    position: absolute;
    bottom: 20px;
  }
`;
