import { Box, styled } from "@mui/system";

export const Container = styled(Box)`
  width: 100%;
  max-width: 1080px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: var(--light-Color);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled(Box)`
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
  background-color: white;
  border: 1px solid red;
  display: flex;
  flex-direction: column;

  .titleForm {
    text-align: center;
    span {
      margin-left: 5px;
      color: var(--primary-Color);
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  .containerForm {
    display: flex;
    padding: 15px;

    .inputForm {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 45%;
    }
    .divider {
      width: 10%;
      display: flex;
      justify-content: center;
      > div {
        background-color: lightgray;
        height: inherit;
        width: 1px;
      }
    }

    .loginForm {
      width: 45%;
    }
  }
  footer {
    font-size: 14px;
    text-align: center;
    padding: 15px;

    > div {
      border-bottom: 1px solid lightgray;
      width: 80%;
      margin: 0 auto;
    }

    p {
      margin: 15px 0;
    }
    span {
      color: var(--primary-Color);
    }
  }
`;
