import { Box, styled } from "@mui/system";
import { Button } from "@mui/material/";

export const Container = styled(Box)`
  width: 100%;
  max-width: 1080px;
  min-height: 100vh;
  margin: 0 auto;
  padding-top: 80px;
  background-color: var(--light-Color);
`;

export const Caixinha = styled(Box)`
  width: 400px;
  height: 800px;
  background-color: red;
`;

export const ButtonSave = styled(Button)`
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
