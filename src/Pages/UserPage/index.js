import { Redirect } from "react-router";
import { DivStyled } from "./style";
import { useUser } from "../../providers/user";
import { useCharacter } from "../../providers/characters";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { Characters } from "../../Components/Characters";
import { ButtonSave, ContainerSave } from "../Home/style";
const UserPage = () => {
  const { isAuthenticated } = useUser();
  const {
    currentFavorites,
    pullFavoritesCharacters,
    save,
    favoriteList,
    compareFavoriteCurrentLists,
    iqualFavoriteCurrent,
  } = useCharacter();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@RaM:token:"));
    if (token) {
      const { sub } = jwtDecode(token);
      pullFavoritesCharacters(sub, token);
    }
  }, []);

  useEffect(() => {
    compareFavoriteCurrentLists();
  }, [currentFavorites]);

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <DivStyled>
      <ContainerSave>
        {!iqualFavoriteCurrent && (
          <ButtonSave borderRadius={"0"} func={save} title={"save"} />
        )}
      </ContainerSave>
      <Characters data={favoriteList} />
    </DivStyled>
  );
};
export default UserPage;
