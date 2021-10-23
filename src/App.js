import "./App.css";
import { Route, Switch } from "react-router-dom";
import Auth from "./containers/Auth";
import { pagePaths } from "./utils/constants";
import ProtectedRoute from "./components/HOC/ProtectedRoute";
import Dashboard from "./containers/Dashboard";
import LoginSuccess from "./containers/LoginSuccess";
import LoginError from "./containers/LoginError";
import Page404 from "./containers/Page404";

function App() {
  return (
    <Switch>
      {/* <Redirect exact path={pagePaths.root} to={pagePaths.auth} /> */}
      <Route exact path={pagePaths.root} component={Auth} />
      <Route exact path={pagePaths.auth} component={Auth} />
      <Route path={pagePaths.authSuccess} component={LoginSuccess} />
      <Route path={pagePaths.authFailed} component={LoginError} />
      <ProtectedRoute path={pagePaths.dashboard} component={Dashboard} />
      <Route path={pagePaths.all} component={Page404} />
    </Switch>
  );
}

export default App;
