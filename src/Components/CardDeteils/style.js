import styled from "styled-components";
import { BaseButton } from "../BaseButton";

export const InfoCard = styled.ul`
  max-width: 530px;
  text-align: left;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  li {
    margin: 5px 0;
    h1 {
      display: inline-block;
      margin-right: 5px;
      ::after {
        content: ":";
      }
    }
  }
`;

export const CardInfoContainer = styled.div`
  background-color: ${({ status }) =>
    status === "Alive" ? "#78b95d" : "#d76d6d"};
  color: ${({ status }) => (status === "Alive" ? "#4d9230" : "#aa3838")};
  display: flex;
  width: 100%;
  max-width: 60%;
  height: 100%;
  max-height: 70%;
  flex-direction: column;
  padding: 15px;
  align-items: center;
  justify-content: space-around;
  border-radius: 15px;
  position: relative;
  img {
    border-radius: 50%;
    width: 100%;
    max-width: 60%;
  }
  @media (min-width: 940px) {
    position: relative;
    max-width: 850px;
    flex-direction: row;
    ul {
      width: 80%;
      li {
        margin: 5px 0 15px 0;
        h1 {
          display: block;
        }
      }
      span {
        font-size: 30px;
      }
    }
    img {
      width: 310px;
      height: 310px;
    }
  }
`;

export const FavoriteButton = styled(BaseButton)`
  position: absolute;
  background-color: #fdfe97;
  bottom: 15px;
  right: 15px;
  color: gray;
  :hover {
    background-color: transparent;
    color: #fdfe97;
  }
`;
