import { useEffect, useState } from "react";
import { Characters } from "../../Components/Characters";
import { NavBar } from "../../Components/NavBar";
import { useCharacter } from "../../providers/characters";
import {
  ButtonSave,
  Container,
  PageButtonLeft,
  PageButtonRight,
} from "./style";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { SearchBar } from "../../Components/search";

const Home = () => {
  const { favoriteList, currentFavorites, characterList, nextPage, prevPage } =
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
      <NavBar iqual={iqual} />
      <SearchBar />
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
      <PageButtonRight onClick={() => nextPage()}>
        <p>
          Next
          <AiOutlineArrowRight />
        </p>
      </PageButtonRight>
      <PageButtonLeft onClick={() => prevPage()}>
        <p>
          Prev
          <AiOutlineArrowLeft />
        </p>
      </PageButtonLeft>
    </Container>
  );
};
export default Home;
