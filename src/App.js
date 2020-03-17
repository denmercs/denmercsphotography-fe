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
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/portfolio" component={Portfolio} /> */}
        <Route path="/pricing" component={Pricing} />
        <Route path="/inquire" component={Inquire} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
