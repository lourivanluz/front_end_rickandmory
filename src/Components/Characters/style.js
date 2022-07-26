import styled from "styled-components";

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  max-width: 1180px;
  margin: 0 auto;
  justify-content: space-evenly;
`;

export const Info = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.349);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
