import React from "react";
import { connect } from "react-redux";
import { Image, Container, Row, Col } from "react-bootstrap";
import "./infopopup.scss";

const InfoPopup = props => {
  const album = props.album;
  const category = album.name
    .split(" ")
    .splice(0, 1)
    .toString();
  const coupleName = album.name
    .split(" ")
    .splice(1)
    .join(" ")
    .toString();

  return (
    <div className="album">
      <div className="album-photo">
        <Image src={album.coverPhoto} />
      </div>
      <p className="album-category">{category}</p>
      <p className="album-name">{coupleName}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    albums: state.facebook.albums
  };
};

export default connect(mapStateToProps)(InfoPopup);
