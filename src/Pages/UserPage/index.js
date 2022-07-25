import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { NavBar } from "../../Components/NavBar";
import api from "../../Services/api";
import { useForm } from "react-hook-form";
import { DivStyled } from "./style";
import { useUser } from "../../providers/user";
const UserPage = () => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@kenzieHub:token:")) || ""
  );

  const { isAuthenticated } = useUser();

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <DivStyled>
      <NavBar />
    </DivStyled>
  );
};
export default UserPage;
