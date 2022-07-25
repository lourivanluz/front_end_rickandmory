import { useCharacter } from "../../providers/characters";
import { useUser } from "../../providers/user";
import "./style.css";
export function CardDeteils({ props }) {
  const { addFavorite, removeFavorite } = useCharacter();
  const { isAuthenticated } = useUser();

  const dados = {
    "Nome Completo": props.name,
    Sexo: props.gender,
    Espécie: props.species,
    Localização: props.location.name,
    "Planeta de origem": props.origin.name,
  };

  const handleFavorite = () => {
    const { id, ...character } = props;
    if (props.favorite) {
      removeFavorite(character);
      props.favorite = false;
    } else {
      addFavorite(character);
      props.favorite = true;
    }
  };

  const infoList = [];
  for (let key in dados) {
    infoList.push([key, dados[key]]);
  }

  return (
    <>
      <ul
        className={
          props.status === "Alive"
            ? "infocard charCard--alive"
            : "infocard charCard--dead"
        }
      >
        {infoList.map((item, index) => (
          <li key={index}>
            <h1>{item[0]}</h1>
            <span>{item[1]}</span>
          </li>
        ))}
        <li>
          <img className="imgCardInfo" src={props.image} alt="img card" />
        </li>
        <li>
          {isAuthenticated ? (
            <button onClick={handleFavorite}>
              {props.favorite ? "desfavoritar" : "favoritar"}
            </button>
          ) : (
            <></>
          )}
        </li>
      </ul>
    </>
  );
}
