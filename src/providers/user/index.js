import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../Services/api";
import jwt_decote from "jwt-decode";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("@RaM:token:") || ""
  );

  const history = useHistory();

  const loginAccount = ({ email, password }) => {
    api
      .post("/api/v1/login", { email, password })
      .then((response) => {
        const { token } = response.data;
        const { sub } = jwt_decote(token);
        localStorage.clear();
        localStorage.setItem("@RaM:token:", JSON.stringify(token));
        localStorage.setItem("@RaM:idUser:", JSON.stringify({ sub }));
        setIsAuthenticated(true);
        history.push("/userPage");
      })
      .catch((_) => console.log("edeu erro"));
  };

  const createAccount = (userInput) => {
    api
      .post("/api/v1/users", userInput)
      .then((_) => {
        loginAccount(userInput);
      })
      .catch((response) => console.log(response));
  };

  return (
    <UserContext.Provider
      value={{
        createAccount,
        loginAccount,
        setIsAuthenticated,
        isAuthenticated,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
