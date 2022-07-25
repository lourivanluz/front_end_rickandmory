import styled from "styled-components";

export const CardStyled = styled.div`
  background-color: ${({ type }) =>
    type === "techs" ? "var(--light-Color)" : "var(--dark-Color)"};
  border-radius: 7px;
  box-shadow: 1px 1px 8px rgb(0, 0, 0, 0.8);
  width: 200px;
  height: 350px;
  padding: 15px;
  margin: 5px;
  position: relative;
  text-align: center;
  color: white;

  button {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 7px;
    right: 5px;
    background-color: red;
    border: none;
    border-radius: 50%;
    color: white;
  }
`;
