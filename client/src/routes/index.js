import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { LandingPage, NotFound, Results } from "../containers";
import routes from "./links";

const router = props => (
  <Router>
    <Switch>
      {/* Unauthorized routes */}
      <Route exact path={routes.root} component={LandingPage} />
      <Route exact path={routes.results} component={Results} />
      {/* Not Found*/}
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default router;
