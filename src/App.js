import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Pricing from "./pages/pricing";
import Inquire from "./pages/inquire";
import Header from "./pages/header";
import Footer from "./pages/footer";

const App = () => {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
};

export default App;
