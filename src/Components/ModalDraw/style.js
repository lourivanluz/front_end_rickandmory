import styled from "styled-components";

export const ModalDrawContainer = styled.div`
  width: 200px;
  text-align: center;
  border-radius: 0px 0px 5px 5px;
  background-color: white;
  position: absolute;
  right: 0;
  top: ${({ height = "30" }) => height + "px"};
  -webkit-animation: scale-up-tr 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: scale-up-tr 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);

  ul {
    padding-top: 10px;
    flex-direction: column;
    padding: 0px 5px;

    li {
      padding: 10px 5px;
      border-bottom: 1px solid lightgrey;
      width: 100%;
      cursor: pointer;
      &:hover {
        color: black;
      }
    }
  }

  @keyframes scale-up-tr {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
    }
  }
`;
