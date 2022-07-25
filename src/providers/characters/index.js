import jwtDecode from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";

const CharacterContext = createContext();

export const useCharacter = () => useContext(CharacterContext);

export const CharacterProvider = ({ children }) => {
  const [characterList, setCharacterList] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);
  const [currentFavorites, setCurrentFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@kenzieHub:token:"));
    if (token) {
      const { sub } = jwtDecode(token);
      pullFavoritesCharacters(sub, token);
    }
  }, []);

  useEffect(() => {
    pullCharacters(currentPage);
  }, [favoriteList]);

  const pullFavoritesCharacters = (id, token) => {
    api
      .get(`api/v1/users/${id}/favorites`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        const attList = data.map((item) => {
          return { ...item, favorite: true };
        });
        setFavoriteList(attList);
        setCurrentFavorites(attList);
        return data;
      })
      .catch((error) => console.log(error));
  };

  const pullCharacters = (currentPage) => {
    api
      .get(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
      .then(({ data }) => {
        const favoriteNames = favoriteList.map((item) => item.name);
        const attList = data.results.map((item) => {
          if (favoriteNames.includes(item.name)) {
            return { ...item, favorite: true };
          }
          return { ...item, favorite: false };
        });
        setCharacterList(attList);
      })
      .catch((error) => console.log(error));
  };

  const filterCharacters = (field, value) => {
    api
      .get(`https://rickandmortyapi.com/api/character/?${field}=${value}`)
      .then(({ data }) => {
        const favoriteNames = favoriteList.map((item) => item.name);
        console.log(favoriteNames);
        const attList = data.results.map((item) => {
          if (favoriteNames.includes(item.name)) {
            return { ...item, favorite: true };
          }
          return { ...item, favorite: false };
        });
        setCharacterList(attList);
      })
      .catch((error) => console.log(error));
  };

  const addFavorite = (item) => {
    const { id, ...character } = item;
    setCurrentFavorites([...currentFavorites, character]);
  };

  const removeFavorite = ({ name }) => {
    const filtred = currentFavorites.filter((item) => item.name !== name);
    setCurrentFavorites([...filtred]);
  };

  const nextPage = () => {
    if (currentPage < 42) setCurrentPage(currentPage + 1);
    pullCharacters(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage >= 2) setCurrentPage(currentPage - 1);
    pullCharacters(currentPage - 1);
  };

  const save = () => {
    const token = JSON.parse(localStorage.getItem("@kenzieHub:token:"));
    const { sub } = jwtDecode(token);

    api
      .post(`api/v1/users/${sub}/favorites`, currentFavorites, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        pullFavoritesCharacters(sub, token);
      })
      .catch((error) => console.log(error));
  };

  return (
    <CharacterContext.Provider
      value={{
        save,
        currentFavorites,
        characterList,
        setCharacterList,
        favoriteList,
        pullFavoritesCharacters,
        addFavorite,
        removeFavorite,
        nextPage,
        prevPage,
        filterCharacters,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
