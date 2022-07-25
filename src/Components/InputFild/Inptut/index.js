import styled from "styled-components";
export const InputStyled = styled.input`
  width: ${({ width = "100%" }) => width};
  height: ${({ height = "40px" }) => height};
  margin-bottom: 20px;
  border-radius: 4px;
  padding-left: 5px;
  background-color: ${({ backgroundColor = "white" }) => backgroundColor};
  border: 1px solid lightgray;
  color: ${({ color = "black" }) => color};

  &:hover {
    border-color: gray;
  }
  &:focus {
    outline: none;
    border: 1px solid;
    border-color: ${({ error = false }) =>
      error ? "red" : "var(--primary-Color)"};
  }
  &:focus::placeholder {
    color: transparent;
  }

  &:focus + label {
    display: block;
    background-color: ${({ backgroundColor = "white" }) => backgroundColor};
    position: absolute;
    padding: 0 5px;
    color: ${({ error = false }) => (error ? "red" : "var(--primary-Color)")};
    font-size: 12px;
    left: 10px;
    top: -10px;
  }
  &:required:valid + label {
    display: block;
    background-color: ${({ backgroundColor = "white" }) => backgroundColor};
    padding: 0 5px;
    position: absolute;
    color: ${({ error = false }) => (error ? "red" : "var(--primary-Color)")};
    font-size: 12px;
    left: 10px;
    top: -10px;
  }

  &:required:valid {
    border: 2px solid;
    border-color: ${({ error = false }) =>
      error ? "red" : "var(--primary-Color)"};
  }
`;
