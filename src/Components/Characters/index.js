import { useState } from "react";
import { useCharacter } from "../../providers/characters";
import { CardDeteils } from "../CardDeteils";
import { CharCard } from "../CharCard";
import "./style.js";
import { CardList, Info } from "./style.js";

export function Characters({ favorite }) {
  const [isVisibleInfo, setIsVisibleInfo] = useState(false);
  const [characterInfo, setCharacterInfo] = useState({});
  const { characterList, favoriteList } = useCharacter();

  const showInfo = (item) => {
    setIsVisibleInfo(isVisibleInfo ? false : true);
    setCharacterInfo(item);
  };
  const list = favorite ? favoriteList : characterList;

  return (
    <>
      <CardList>
        {list.map((item) => (
          <li key={item.id} onClick={() => showInfo(item)}>
            <CharCard props={item} />
          </li>
        ))}
        {isVisibleInfo && (
          <Info onClick={() => showInfo("")}>
            <CardDeteils props={characterInfo} />
          </Info>
        )}
      </CardList>
    </>
  );
}
