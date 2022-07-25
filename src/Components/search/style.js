import styled from "styled-components";

export const DivContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  .inputDiv {
    display: flex;
    width: 100%;
    justify-content: center;
    input {
      width: 800px;
      border: none;
      height: 30px;
      border-radius: 5px;
      margin-right: 15px;
    }
    button {
      border: none;
      border-radius: 5px;
      padding: 5px;
    }
  }
  .radioDiv {
    display: flex;
    justify-content: center;
    input {
      margin-left: 60px;
      margin-right: 5px;
    }
  }
`;
