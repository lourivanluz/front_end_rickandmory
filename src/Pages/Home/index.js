import { useEffect, useState } from "react";
import { Characters } from "../../Components/Characters";
import { NavBar } from "../../Components/NavBar";
import { useCharacter } from "../../providers/characters";
import { ButtonSave, Container } from "./style";

const Home = () => {
  const { favoriteList, currentFavorites, characterList, setCharacterList } =
    useCharacter();
  const [iqual, setIqual] = useState();
  const { save } = useCharacter();

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

  return (
    <Container>
      <NavBar />
      <Characters data={characterList} />

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
    </Container>
  );
};
export default Home;
