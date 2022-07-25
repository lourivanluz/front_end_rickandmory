import { Box, styled as MU } from "@mui/system";
import { Button } from "@mui/material/";
import styled from "styled-components";

export const Container = MU(Box)`
  width: 100%;
  max-width: 1080px;
  min-height: 100vh;
  margin: 0 auto;
  padding-top: 80px;
  background-color: var(--light-Color);
`;

export const Caixinha = MU(Box)`
  width: 400px;
  height: 800px;
  background-color: red;
`;

export const ButtonSave = MU(Button)`
  height: 30px;
  padding: ${({ padding = "16px" }) => padding};
  color: ${({ fontcolor = "#057d9f" }) => fontcolor};
  font-size: ${({ fontsizer = "16px" }) => fontsizer};
  border-radius: ${({ borderradius = "0px" }) => borderradius};
  border: ${({ border = "1px solid #057d9f" }) => border};
  position: absolute;
  top: 15px;
  left: 50%;
  padding: 15px;
  &:hover {
    color: ${({ hovercolor = "white" }) => hovercolor};
    border: ${({ hoverborder = "none" }) => hoverborder};
  }
`;

export const PageButtonLeft = styled.div`
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  font-size: 30px;
  padding: 5px;
  border-radius: 2px;
  border: none;
  background-color: transparent;
  position: absolute;
  left: 80px;
  top: 50%;
  cursor: pointer;
`;

export const PageButtonRight = styled.div`
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  font-size: 30px;
  padding: 5px;
  border-radius: 2px;
  border: none;
  background-color: transparent;
  position: absolute;
  right: 80px;
  top: 50%;
  cursor: pointer;
`;
