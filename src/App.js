import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Pricing from "./pages/pricing";
import Inquire from "./pages/inquire";
import Engagement from "./components/engagementlist";
import Weddings from "./components/weddinglist";
import {
  getWeddingAlbums,
  getEngagementAlbums,
  getWeddingInfo,
} from "./store/actions/facebookActions";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import "./App.scss";
import Header from "./pages/header";
import Footer from "./pages/footer";

const App = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   props.getWeddingAlbums();
  //   props.getEngagementAlbums();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    dispatch(getWeddingInfo());
  }, []);

  return (
    <>
      <div className="layout">
        <Header />
        <Switch>
          <Route exact path="/" component={Weddings} />
          <Route exact path="/engagement" component={Engagement} />
          <Route path="/maps" component={Portfolio} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/inquire" component={Inquire} />
        </Switch>
        <Footer />
      </div>
      <div></div>
    </>
  );
};

export default connect(null, { getWeddingAlbums, getEngagementAlbums })(App);
