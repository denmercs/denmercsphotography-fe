import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Portfolio from "./pages/portfolio";
import Pricing from "./pages/pricing";
import Inquire from "./pages/inquire";
import Engagement from "./components/engagementlist";
import {
  getWeddingInfo,
  getEngagmentInfo,
} from "./store/actions/facebookActions";
import { useDispatch } from "react-redux";
import AlbumInfo from "./components/albumInfo";
import WeddingList from "./components/weddinglist";
import { Container, Row, Col } from "react-bootstrap";
import Home from "./pages/home";
import Footer from "./pages/footer";
import Header from "./pages/header";
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
    dispatch(getEngagmentInfo());
  }, []);

  return (
    <>
      <div className="layout">
        <Container fluid>
          <Row>
            <Col xs={2} id="sidebar-wrapper">
              <Header />
            </Col>
            <Col xs={10} id="page-content-wrapper">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/weddings" component={WeddingList} />
                <Route exact path="/engagement" component={Engagement} />
                {/* <Route exact path="/videos" component={Videos} /> */}
                {/* <Route path="/maps" component={Portfolio} /> */}
                <Route exact path="/pricing" component={Pricing} />
                <Route exact path="/inquire" component={Inquire} />
                <Route exact path="/album/:id" component={AlbumInfo} />
              </Switch>
            </Col>
          </Row>
          <Row>
            <Footer />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default App;
