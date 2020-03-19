import React from "react";
import { connect } from "react-redux";
import { Image, Container, Row, Col } from "react-bootstrap";

const InfoPopup = props => {
  const album = props.album;

  return (
    <Container>
      <Row>
        <Col>
          <Image src={album.coverPhoto} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>{album.name}</h3>
          <p>{album.description}</p>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    albums: state.facebook.albums
  };
};

export default connect(mapStateToProps)(InfoPopup);
