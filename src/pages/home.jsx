import React from "react";
import "./home.scss";
import WeddingList from "../components/weddinglist";
import Header from "./header";
import Footer from "./footer"


const Home = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <WeddingList />
      </div>
      <div>
        <Footer />
      </div>
    </>
    )
};

export default Home;
