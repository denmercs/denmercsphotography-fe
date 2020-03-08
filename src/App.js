import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Pricing from "./pages/pricing";
import Inquire from "./pages/inquire";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/pricing">
          <Pricing />
        </Route>
        <Route path="/inquire">
          <Inquire />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
