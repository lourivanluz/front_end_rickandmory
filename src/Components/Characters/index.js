import { useState } from "react";
import { CardDeteils } from "../CardDeteils";
import { CharCard } from "../CharCard";
import "./style.css";

export function Characters({ data }) {
  const [isVisibleInfo, setIsVisibleInfo] = useState(false);
  const [characterInfo, setCharacterInfo] = useState({});

  const showInfo = (item) => {
    setIsVisibleInfo(isVisibleInfo ? false : true);
    setCharacterInfo(item);
    //console.log(item);
  };

  return (
    <>
      <ul className="cardList">
        {data.map((item) => (
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
