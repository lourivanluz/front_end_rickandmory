import { Redirect } from "react-router";
import { NavBar } from "../../Components/NavBar";
import { DivStyled } from "./style";
import { useUser } from "../../providers/user";
import { useCharacter } from "../../providers/characters";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { Characters } from "../../Components/Characters";
import { ButtonSave } from "../Home/style";
const UserPage = () => {
  const { isAuthenticated } = useUser();
  const {
    currentFavorites,
    pullFavoritesCharacters,
    save,
    favoriteList,
    characterList,
  } = useCharacter();
  const [iqual, setIqual] = useState();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@kenzieHub:token:"));
    if (token) {
      const { sub } = jwtDecode(token);
      pullFavoritesCharacters(sub, token);
    }
  }, []);

  useEffect(() => {
    const favoriteNames = JSON.stringify(
      favoriteList.map((item) => item.name).sort()
    );
    const currentFavNames = JSON.stringify(
      currentFavorites.map((item) => item.name).sort()
    );
    const isIqual = favoriteNames === currentFavNames;
    setIqual(isIqual);
  }, [currentFavorites]);

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <DivStyled>
      <NavBar />
      <Characters data={characterList.filter((item) => item.favorite)} />

      {!iqual ? (
        <ButtonSave
          fontcolor={"#4b9fb7"}
          border={"none"}
          onClick={() => save()}
        >
          Save
        </ButtonSave>
      ) : (
        <></>
      )}
    </DivStyled>
  );
};
export default UserPage;
