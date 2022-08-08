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
  const [showLoad, setShowLoad] = useState(false);

  const loginAccount = ({ email, password }) => {
    api
      .post("/api/v1/login", { email, password })
      .then((response) => {
        const { token } = response.data;
        const { sub } = jwt_decote(token);
        localStorage.removeItem("@RaM:token:");
        localStorage.removeItem("@RaM:idUser:");
        localStorage.setItem("@RaM:token:", JSON.stringify(token));
        localStorage.setItem("@RaM:idUser:", JSON.stringify(sub));
        setIsAuthenticated(true);
        history.push("/userPage");
        setShowLoad(false);
      })
      .catch((error) => {
        console.log(error.response.data);
        setShowLoad(false);
      });
  };

  const logout = () => {
    setIsAuthenticated("");
    localStorage.removeItem("@RaM:token:");
    localStorage.removeItem("@RaM:idUser:");
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
        logout,
        isAuthenticated,
        showLoad,
        setShowLoad,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
