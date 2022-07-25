import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const ButtonStyled = styled(Button)`
  height: 30px;
  padding: ${({ padding = "16px" }) => padding};
  color: ${({ fontcolor = "#057d9f" }) => fontcolor};
  font-size: ${({ fontsizer = "16px" }) => fontsizer};
  border-radius: ${({ borderradius = "0px" }) => borderradius};
  border: ${({ border = "1px solid #057d9f" }) => border};

  padding: 15px;
  &:hover {
    color: ${({ hovercolor = "white" }) => hovercolor};
    background-color: ${({ hoverbcolor = "inherit" }) => hoverbcolor};
    border: ${({ hoverborder = "none" }) => hoverborder};
  }
`;
