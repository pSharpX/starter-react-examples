import React from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import NotFound from "./bundles/common/components/Error/NotFound";
import LogInContainer from "../auth/signin/LogInContainer";
import SignUpContainer from "../auth/signup/SignUpContainer";

function AppRouter() {
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
export default AppRouter;
