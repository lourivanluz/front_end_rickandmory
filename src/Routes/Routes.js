import { Route, Switch } from "react-router";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import { TestPage } from "../Pages/testComponent";
import UserPage from "../Pages/UserPage";
import { MainStyled } from "./../Components/Pagebase";

const Routes = () => {
  return (
    <MainStyled>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/userPage">
          <UserPage />
        </Route>
        <Route path="/teste">
          <TestPage />
        </Route>
      </Switch>
    </MainStyled>
  );
};

export default Routes;
