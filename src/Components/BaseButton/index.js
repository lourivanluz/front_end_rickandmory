import { ButtonStyled } from "./style";

export const BaseButton = ({ title }) => {
  function handleClick(event) {
    const buttonPosition = event.target.getBoundingClientRect();

    const x = Math.abs(buttonPosition.left - event.clientX);
    const y = Math.abs(buttonPosition.top - event.clientY);
    const element = document.querySelector(".circle");
    element.classList.add("circle-active");
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
    console.log(title);

    function limpaEfeito() {
      element.removeEventListener("animationend", limpaEfeito);
      element.classList.remove("circle-active");
    }
    element.addEventListener("animationend", limpaEfeito);
  }

  return (
    <ButtonStyled onClick={(event) => handleClick(event)} title={title}>
      {title}
      <span className="circle"></span>
    </ButtonStyled>
  );
};
