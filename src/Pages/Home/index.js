import { useEffect } from "react";
import { Characters } from "../../Components/Characters";
import { useCharacter } from "../../providers/characters";
import { ButtonSave, Container, ContainerSave, NaveButton } from "./style";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Home = () => {
  const {
    currentFavorites,
    save,
    nextPage,
    prevPage,
    iqualFavoriteCurrent,
    compareFavoriteCurrentLists,
  } = useCharacter();

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
      <Characters />
    </Container>
  );
};
export default Home;
