import { CardStyled } from "./style";
export const Card = ({ type, title, description, status, del, idCard }) => {
  const message = description ? description : status;

  return (
    <CardStyled type={type}>
      <h2>{title}</h2>
      <p>{message}</p>
      <button
        onClick={() => {
          del(idCard, type);
        }}
      >
        x
      </button>
    </CardStyled>
  );
};
