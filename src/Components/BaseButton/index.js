import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ButtonStyled } from "./style";

export const BaseButton = ({ children, ...ress }) => {
  function handleClick(event) {
    const button = event.target;
    const buttonPosition = button.getBoundingClientRect();

    const element = document.createElement("span");
    element.classList.add("circle");
    element.classList.add("circle-active");
    button.insertAdjacentElement("beforeend", element);

    const x = Math.abs(buttonPosition.left - event.clientX);
    const y = Math.abs(buttonPosition.top - event.clientY);
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;

    function limpaEfeito() {
      element.removeEventListener("animationend", limpaEfeito);
      element.classList.remove("circle-active");
      element.remove();
    }
    element.addEventListener("animationend", limpaEfeito);
    if (ress.set || ress.show) {
      ress.set(!ress.show);
    }
    if (ress.func) {
      const funct = ress.func;
      funct(ress.param);
    }
  }

  return (
    <ButtonStyled onClick={(event) => handleClick(event)} {...ress}>
      {ress.title}
      {children}
    </ButtonStyled>
  );
};
