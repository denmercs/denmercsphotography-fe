import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Pricing from "./pages/pricing";
import Inquire from "./pages/inquire";
import {
  getWeddingAlbums,
  getEngagementAlbums,
  getWeddingInfo,
} from "./store/actions/facebookActions";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import "./App.scss";

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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/maps" component={Portfolio} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/inquire" component={Inquire} />
      </Switch>
    </>
  );
};

export default connect(null, { getWeddingAlbums, getEngagementAlbums })(App);
