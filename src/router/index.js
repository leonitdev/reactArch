import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FallbackLoader from "../components/loaders/FallbackLoaders";

import MainLayout from "../layouts/MainLayout";

import HomePage from "../pages/home/HomePage";
import UsersPage from "../pages/users/UsersPage";
import { USERS_PATH, HOME_PATH } from "../constants/route-paths";

function AppRouter() {
  return (
    <Router>
        <MainLayout>
          <Switch>
            <Route path={HOME_PATH} exact component={HomePage} />
            <Route path={USERS_PATH} exact component={UsersPage} />
          </Switch>
        </MainLayout>
    </Router>
  );
}

export default AppRouter;
