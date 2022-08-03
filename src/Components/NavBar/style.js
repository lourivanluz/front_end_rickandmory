import { Box } from "@mui/system";
import { styled as MU } from "@mui/material/styles";

import styled from "styled-components";

export const NavBarStyled = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  max-width: 1280px;

  ul {
    display: flex;
    align-items: center;
  }
`;

export const Container = styled.div`
  box-shadow: 1px 5px 9px -2px rgba(5, 5, 5, 0.41);
  padding: 15px;
  position: absolute;
  height: 53px;
  top: 0;
  left: 0;
  right: 0;

  background-color: #04607b;
`;
