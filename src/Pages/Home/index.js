import { useEffect } from "react";
import { Characters } from "../../Components/Characters";
import { useCharacter } from "../../providers/characters";
import { ButtonSave, Container, ContainerSave, NaveButton } from "./style";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { SearchBar } from "../../Components/search";

const Home = () => {
  const {
    favoriteList,
    currentFavorites,
    characterList,
    save,
    nextPage,
    prevPage,
    iqualFavoriteCurrent,
    compareFavoriteCurrentLists,
  } = useCharacter();

  useEffect(() => {
    console.log(characterList);
  }, [characterList]);

  useEffect(() => {
    compareFavoriteCurrentLists();
  }, [currentFavorites]);

  const handleclick = () => {
    nextPage();
  };
  const handdleNext = () => {
    prevPage();
  };

  return (
    <Container>
      <ContainerSave>
        <NaveButton onClick={handdleNext}>
          <AiOutlineArrowLeft />
        </NaveButton>
        {!iqualFavoriteCurrent ? (
          <ButtonSave borderRadius={"0"} func={save} title={"save"} />
        ) : (
          <div style={{ width: "65px" }}></div>
        )}
        <NaveButton onClick={handleclick}>
          <AiOutlineArrowRight />
        </NaveButton>
      </ContainerSave>
      <SearchBar />
      <Characters data={characterList} />
    </Container>
  );
};
export default Home;
