import styled from "styled-components";

export const ContainerCard = styled.div`
  width: 250px;
`;
export const CharCardStyle = styled.div`
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.541);
  border-radius: 5px;
  padding: 15px;
  margin: 15px;
  width: 220px;
  position: relative;
  background-color: ${({ status }) =>
    status === "Alive" ? "#78b95d" : "#d76d6d"};
  color: ${({ status }) => (status === "Alive" ? "#4d9230" : "#aa3838")};
  :hover {
    width: 231px;
    margin: 5px;
    transform: translate(3px, 3px);
  }
  img {
    border: 3px solid;
    border-color: ${({ status }) =>
      status === "Alive" ? "#467a54" : "#3b2428"};
  }
`;

export const Star = styled.div`
  font-size: 20px;
  position: absolute;
  font-size: 25px;
  position: absolute;
  right: 7px;
  top: 10px;
`;
