import React from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

import "./Main.css";

import App from "./App";
import SignUpContainer from "./bundles/pages/auth/SignUpContainer";
import LogInContainer from "./bundles/pages/auth/LogInContainer";
import NotFound from "./bundles/common/components/Error/NotFound";

function Main() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LogInContainer} />
        <Route path="/signup" component={SignUpContainer} />
        <Route exact path="" component={App} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

// export default withAuthentication(AppBase);
export default Main;
