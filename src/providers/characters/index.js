import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";

const CharacterContext = createContext();

export const useCharacter = () => useContext(CharacterContext);

export const CharacterProvider = ({ children }) => {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    api
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setCharacterList(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <CharacterContext.Provider
      value={{
        characterList,
        setCharacterList,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
