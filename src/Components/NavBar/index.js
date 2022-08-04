import { Container, NavBarStyled } from "./style";
import { useHistory } from "react-router";
import { useUser } from "../../providers/user";
import { BaseButton } from "../BaseButton";

import { useState } from "react";
import { ButtonDrop } from "../ButtonDrop";

export const NavBar = ({ iqual }) => {
  const history = useHistory();
  const [show, setShow] = useState();
  const { isAuthenticated, logout } = useUser();

  const handleRoute = (path) => {
    setShow(false);
    history.push(path);
  };

  return (
    <Container>
      <NavBarStyled>
        <div>logo</div>
        <nav>
          <ul>
            <li>
              <BaseButton borderRadius={"0"} func={handleRoute} param={"/"}>
                Home
              </BaseButton>
            </li>
            <li>
              <BaseButton
                borderRadius={"0"}
                func={handleRoute}
                param={"/register"}
              >
                Cadastre-se
              </BaseButton>
            </li>
            <li>
              <BaseButton
                borderRadius={"0"}
                func={handleRoute}
                param={"/login"}
              >
                {isAuthenticated ? "Outra conta" : "Login"}
              </BaseButton>
            </li>
            {isAuthenticated && (
              <li>
                <ButtonDrop title={"Dashboard"} set={setShow} show={show}>
                  <li onClick={logout}>Logout</li>
                  <li onClick={() => handleRoute("/userPage")}>Dashboard</li>
                </ButtonDrop>
              </li>
            )}
          </ul>
        </nav>
      </NavBarStyled>
    </Container>
  );
};
