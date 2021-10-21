import "./App.css";
import { Route, Switch } from "react-router-dom";
import Auth from "./containers/Auth";
import { pagePaths } from "./utils/constants";
import ProtectedRoute from "./components/HOC/ProtectedRoute";
import Dashboard from "./containers/Dashboard";
import LoginSuccess from "./containers/LoginSuccess";

function App() {
  return (
    <Switch>
      {/* <Redirect exact path={pagePaths.root} to={pagePaths.auth} /> */}
      <Route exact path={pagePaths.root} component={Auth} />
      <Route exact path={pagePaths.auth} component={Auth} />
      <Route path={pagePaths.authSuccess} component={LoginSuccess} />
      <ProtectedRoute path={pagePaths.dashboard} component={Dashboard} />
    </Switch>
  );
}

export default App;
