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
  const [iqualFavoriteCurrent, setIqualFavoriteCurrent] = useState(null);

  useEffect(() => {
    pullFavoritesCharacters().then((data) => pullCharacters(1, data));
  }, []);

  const pullFavoritesCharacters = async () => {
    console.log("pullFavoritesCharacters");
    const token = JSON.parse(localStorage.getItem("@RaM:token:")) || "";
    const sub = JSON.parse(localStorage.getItem("@RaM:idUser:")) || "";
    if (sub && token) {
      return await api
        .get(`api/v1/users/${sub}/favorites`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(({ data }) => {
          const attList = data.map((item) => {
            return { ...item, favorite: true };
          });
          setFavoriteList(attList);
          setCurrentFavorites(attList);
          setIqualFavoriteCurrent(true);
          return data;
        })
        .catch((error) => console.log(error));
    }
  };

  const pullCharacters = async (
    page = currentPage,
    curFavorite = currentFavorites
  ) => {
    await api
      .get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then(({ data }) => {
        const favoriteNamesCurrent = curFavorite.map((item) => item.name);
        const attList = data.results.map((item) => {
          if (favoriteNamesCurrent.includes(item.name)) {
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

  const compareFavoriteCurrentLists = () => {
    const favoriteNames = JSON.stringify(
      favoriteList.map((item) => item.name).sort()
    );
    const currentFavNames = JSON.stringify(
      currentFavorites.map((item) => item.name).sort()
    );
    const isIqual = favoriteNames === currentFavNames;
    setIqualFavoriteCurrent(isIqual);
  };

  const nextPage = () => {
    console.log("chamou ?");
    if (currentPage < 42) setCurrentPage(currentPage + 1);
    pullCharacters(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage >= 2) setCurrentPage(currentPage - 1);
    pullCharacters(currentPage - 1);
  };

  const save = () => {
    const token = JSON.parse(localStorage.getItem("@RaM:token:"));
    const { sub } = jwtDecode(token);

    api
      .post(`api/v1/users/${sub}/favorites`, currentFavorites, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        pullFavoritesCharacters().then((data) => pullCharacters(1, data));
      })
      .catch((error) => console.log(error));
  };

  return (
    <CharacterContext.Provider
      value={{
        save,
        pullCharacters,
        characterList,
        favoriteList,
        addFavorite,
        removeFavorite,
        nextPage,
        prevPage,
        filterCharacters,
        compareFavoriteCurrentLists,
        iqualFavoriteCurrent,
        currentFavorites,
        setCurrentFavorites,
        currentPage,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
