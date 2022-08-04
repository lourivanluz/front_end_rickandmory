import styled from "styled-components";
export const DivStyled = styled.div`
  padding: 0px 20px;
  width: 100%;
  max-width: 1080px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: white;

  .form {
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    h1 {
      margin-bottom: 5px;
    }
  }
  .containerForm {
    display: flex;
    justify-content: space-around;
  }
  .formType {
    border: 1px solid red;
    padding: 15px;
    display: flex;
    flex-direction: column;
    border-radius: 7px;
    width: 100%;
    max-width: 200px;
    position: relative;
    button {
      position: absolute;
      bottom: 5px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .display {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
  }
`;
