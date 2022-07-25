import "./style.css";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useUser } from "../../providers/user";

export function CharCard({ props }) {
  const nome =
    props.name.length > 15 ? props.name.slice(0, 12) + "..." : props.name;

  const { isAuthenticated } = useUser();

  return (
    <div className="container-card">
      <div
        className={
          props.status === "Alive"
            ? "charCard charCard--alive"
            : "charCard charCard--dead"
        }
      >
        <h2>{nome}</h2>
        {isAuthenticated && (
          <div>
            {props.favorite ? (
              <AiFillStar className="estrela" />
            ) : (
              <AiOutlineStar className="estrela" />
            )}
          </div>
        )}

        <img src={props.image} alt="img card" />
      </div>
    </div>
  );
}
