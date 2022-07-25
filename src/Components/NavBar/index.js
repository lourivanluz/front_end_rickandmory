import { Container, NavBarStyled } from "./style";
import { useHistory } from "react-router";
import { ButtonMenuDrop, ButtonsDefult } from "./../Buttons";
import { useUser } from "../../providers/user";

export const NavBar = ({ iqual }) => {
  const history = useHistory();
  const { isAuthenticated } = useUser();

  const handleRoute = (path) => {
    history.push(path);
  };

  return (
    <Container>
      <NavBarStyled>
        <div>logo</div>
        <nav>
          <ul>
            <li>
              <ButtonsDefult
                fontcolor={"#4b9fb7"}
                border={"none"}
                onClick={() => handleRoute("/")}
              >
                Home
              </ButtonsDefult>
            </li>
            <li>
              <ButtonsDefult
                fontcolor={"#4b9fb7"}
                border={"none"}
                onClick={() => handleRoute("/register")}
              >
                Cadastre-se
              </ButtonsDefult>
            </li>
            <li>
              <ButtonsDefult
                fontcolor={"#4b9fb7"}
                border={"none"}
                onClick={() => handleRoute("/login")}
              >
                {isAuthenticated ? "Outra conta" : "Login"}
              </ButtonsDefult>
            </li>
            {isAuthenticated && (
              <li>
                <ButtonMenuDrop />
              </li>
            )}
          </ul>
        </nav>
      </NavBarStyled>
    </Container>
  );
};
