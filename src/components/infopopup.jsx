import React, { useState, useEffect } from "react";
import "./infopopup.scss";
import { connect } from "react-redux";
import { getPhotosById } from "../store/actions/facebookActions";
import Gallery from "react-grid-gallery";

const InfoPopup = props => {
  const { album, show, handleClose, handleShow, initial } = props;
  const [photoAlbum, setPhotoAlbum] = useState([]);
  // const images = [];

  const category = album.name
    .split(" ")
    .splice(0, 1)
    .toString();
  const coupleName = album.name
    .split(" ")
    .splice(1)
    .join(" ")
    .toString();

  useEffect(() => {
    props.getPhotosById(props.album.id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setPhotoAlbum(props.photos);
  }, [props.photos]);

  return (
    <>
      {initial ? null : (
        <>
          <div className="album">
            <div className="album-photo">
              <img src={album.coverPhoto} />
            </div>
            <p className="album-category">{category}</p>
            <p className="album-name">{coupleName}</p>
            <button className="album-button" onClick={handleShow}>
              Open
            </button>
          </div>
          <div
            show={show}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            {/* <Modal.Header closeButton>
              <Modal.Title>{`${category} ${coupleName}`}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="modal-body-description">{album.description}</div>
              <Gallery images={photoAlbum} />
            </Modal.Body>
            <Modal.Footer>
              <Button className="album-button" onClick={handleClose}>
                close
              </Button>
            </Modal.Footer> */}
          </div>
        </>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    albums: state.facebook.albums,
    photos: state.facebook.photos
  };
};

export default connect(mapStateToProps, { getPhotosById })(InfoPopup);
