import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useUser } from "../../providers/user";
import { CharCardStyle, ContainerCard } from "./style";

export function CharCard({ props }) {
  const nome =
    props.name.length > 15 ? props.name.slice(0, 12) + "..." : props.name;

  const { isAuthenticated } = useUser();

  return (
    <ContainerCard>
      <CharCardStyle status={props.status}>
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
      </CharCardStyle>
    </ContainerCard>
  );
}
