import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Pricing from "./pages/pricing";
import Inquire from "./pages/inquire";
import Header from "./pages/header";
import Footer from "./pages/footer";
import { getAlbums } from "./store/actions/facebookActions";
import { connect } from "react-redux";

const App = props => {
  useEffect(() => {
    props.getAlbums();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/inquire" component={Inquire} />
      </Switch>

      <Footer />
    </>
  );
};

export default connect(null, { getAlbums })(App);
