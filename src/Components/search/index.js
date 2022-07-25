import { useState } from "react";
import { useCharacter } from "../../providers/characters";
import { DivContainer } from "./style";

export const SearchBar = () => {
  const [serchInput, setSerchInput] = useState("");
  const [radioInput, setRadioInput] = useState();
  const { filterCharacters } = useCharacter();
  const onChangeValue = (event) => {
    setRadioInput(event.target.value);
  };

  const handleSearch = () => {
    filterCharacters(radioInput, serchInput);
  };
  return (
    <DivContainer>
      <div className="inputDiv">
        <input
          type={"text"}
          value={serchInput}
          onChange={(e) => setSerchInput(e.target.value)}
        />
        <button onClick={handleSearch}>pesquisar</button>
      </div>

      <div className="radioDiv" onChange={onChangeValue}>
        <input type="radio" value="name" name="gender" /> name
        <input type="radio" value="status" name="gender" /> status
        <input type="radio" value="species" name="gender" /> species
      </div>
    </DivContainer>
  );
};
