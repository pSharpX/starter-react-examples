import React from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import LogInContainer from "../auth/signin/LogInContainer";
import SignUpContainer from "../auth/signup/SignUpContainer";
import AdminRoutes from "./AdminRoutes";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LogInContainer} />
        <Route path="/signup" component={SignUpContainer} />
        <Route exact path="" component={AdminRoutes} />
      </Switch>
    </BrowserRouter>
  );
}

// export default withAuthentication(AppBase);
export default AppRoutes;
