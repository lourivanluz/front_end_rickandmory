import { useState } from "react";
import { useCharacter } from "../../providers/characters";
import { CardDeteils } from "../CardDeteils";
import { CharCard } from "../CharCard";
import "./style.css";

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
      <ul className="cardList">
        {list.map((item) => (
          <li key={item.id} onClick={() => showInfo(item)}>
            <CharCard props={item} />
          </li>
        ))}
        {isVisibleInfo ? (
          <div className="info" onClick={() => showInfo("")}>
            <CardDeteils props={characterInfo} />
          </div>
        ) : null}
      </ul>
    </>
  );
}
