import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useHistory } from "react-router";
import { useUser } from "../../providers/user";
import { ButtonStyled } from "./style";

export const ButtonMenuDrop = ({ ...rest }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { setIsAuthenticated } = useUser();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const history = useHistory();

  return (
    <div>
      <ButtonStyled
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        fontcolor={"#4b9fb7"}
        border={"none"}
      >
        Dashboard
      </ButtonStyled>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => history.push("/userPage")}>
          Minha página
        </MenuItem>
        <MenuItem
          onClick={() => {
            localStorage.clear();
            setIsAuthenticated("");
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export const ButtonsDefult = ({ children, ...rest }) => {
  return <ButtonStyled {...rest}>{children}</ButtonStyled>;
};
