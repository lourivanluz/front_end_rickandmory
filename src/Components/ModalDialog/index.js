import { useEffect } from "react";
import { useCharacter } from "../../providers/characters";
import { BaseButton } from "../BaseButton";
import { Dialog, Modal } from "./style";

export const ModalDialog = ({ setShowModal }) => {
  const bodyStyle = document.body.style;

  const {
    save,
    setCurrentFavorites,
    favoriteList,
    pullCharacters,
    currentPage,
  } = useCharacter();

  useEffect(() => {
    bodyStyle.overflowY = "hidden";
  });
  const handleModalClick = () => {
    bodyStyle.overflowY = "";
  };

  const handleNoButton = () => {
    setShowModal(false);
    setCurrentFavorites(favoriteList);
    pullCharacters(currentPage, favoriteList);
  };
  const handleYesButton = () => {
    setShowModal(false);
    save();
  };

  return (
    <Modal onClick={handleModalClick}>
      <Dialog>
        <div>
          <p> Alterações foram feitas, deseja salvar antes de proceguir ?</p>
        </div>
        <div className="buttons">
          <BaseButton
            bg={"white"}
            color={"green"}
            hoverBg={"green"}
            hoverColor={"white"}
            func={handleYesButton}
          >
            sim
          </BaseButton>
          <BaseButton
            bg={"white"}
            color={"red"}
            hoverBg={"red"}
            hoverColor={"white"}
            func={handleNoButton}
          >
            não
          </BaseButton>
        </div>
      </Dialog>
    </Modal>
  );
};
