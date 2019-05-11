import React from "react";
import { Meteor } from "meteor/meteor";
import { createBrowserHistory } from "history";
import { Switch, Router, Route } from "react-router";

import Signup from "../ui/Signup";
import Link from "../ui/Link";
import NotFound from "../ui/NotFound";
import Login from "../ui/Login";

const browserHistory = createBrowserHistory();
const unaunthenticatedPages = ["/", "/signup"];
const aunthenticatedPages = ["/links"];

// start - controll the back/next broser buttons behavior
const onEnterPublicPage = Component => {
  if (Meteor.userId()) {
    return browserHistory.replace("/links");
  } else {
    return <Component />;
  }
};

const onEnterPrivatePage = Component => {
  if (!Meteor.userId()) {
    return browserHistory.replace("/");
  } else {
    return <Component />;
  }
};

export const onAuthChange = (isAutheticated) => {
  const pathName = browserHistory.location.pathname;
  const isUnauthenticatedPage = unaunthenticatedPages.includes(pathName);
  const isAutheticatedPage = aunthenticatedPages.includes(pathName);

  if (isUnauthenticatedPage && isAutheticated) {
    browserHistory.replace("/links");
  } else if (isAutheticatedPage && !isAutheticated) {
    browserHistory.replace("/");
  }
};

// end - controll the back/next broser buttons behavior
export const routes = (
  <Router history={browserHistory}>
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          return onEnterPublicPage(Login);
        }}
      />
      <Route
        path="/signup"
        render={() => {
          return onEnterPublicPage(Signup);
        }}
      />
      <Route
        path="/links"
        render={() => {
          return onEnterPrivatePage(Link);
        }}
      />
      <Route
        path="*"
        render={() => {
          return <NotFound />;
        }}
      />
    </Switch>
  </Router>
);
