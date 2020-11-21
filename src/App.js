import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Portfolio from "./pages/portfolio";
import Pricing from "./pages/pricing";
import Inquire from "./pages/inquire";
import Engagement from "./components/engagementlist";
import {
  getWeddingAlbums,
  getEngagementAlbums,
  getWeddingInfo,
} from "./store/actions/facebookActions";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import "./App.scss";
import AlbumInfo from "./components/AlbumInfo";
import WeddingList from "./components/engagementlist";
import Home from "./pages/home";

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
        <Switch>
          <Route exact path="/" component={WeddingList} />
          <Route exact path="/engagement" component={Engagement} />
          {/* <Route exact path="/videos" component={Videos} /> */}
          {/* <Route path="/maps" component={Portfolio} /> */}
          <Route path="/pricing" component={Pricing} />
          <Route path="/inquire" component={Inquire} />
          <Route exact path="/album/:id" component={AlbumInfo} />
        </Switch>
        <Home />
      </div>
    </>
  );
};

export default connect(null, { getWeddingAlbums, getEngagementAlbums })(App);
