import { Container, NavBarStyled } from "./style";
import { useHistory } from "react-router";
import { useUser } from "../../providers/user";
import { BaseButton } from "../BaseButton";

import { useState } from "react";
import { ButtonDrop } from "../ButtonDrop";
import { ModalDialog } from "../ModalDialog";
import { useCharacter } from "../../providers/characters";

export const NavBar = () => {
  const history = useHistory();
  const [show, setShow] = useState();
  const [showModal, setShowModal] = useState(false);
  const { isAuthenticated, logout } = useUser();
  const { iqualFavoriteCurrent } = useCharacter();

  const handleRoute = (path) => {
    if (iqualFavoriteCurrent || path === "/") {
      setShow(false);
      history.push(path);
    } else {
      setShowModal(true);
    }
  };

  return (
    <Container>
      {showModal && <ModalDialog setShowModal={setShowModal} />}
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
                  <li onClick={() => handleRoute("/userPage")}>Dashboard</li>
                  <li onClick={logout}>Logout</li>
                </ButtonDrop>
              </li>
            )}
          </ul>
        </nav>
      </NavBarStyled>
    </Container>
  );
};
