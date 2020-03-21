import React, { useState, useEffect } from "react";
import "./maps.scss";
import { connect } from "react-redux";
import ReactMapGL, { Popup } from "react-map-gl";
import InfoPopup from "./infopopup";
import MarkerMap from "./markermap";
import CardsMap from "./cardsmap";
import SpinnerMap from "./spinnermap";

const Map = props => {
  const [initial, setInitial] = useState();
  const [weddingAlbums, setWeddingAlbums] = useState([]);
  const [engagementAlbums, setEngagementAlbums] = useState([]);
  const [selected, setSelected] = useState(null);
  const [show, setShow] = useState(false);
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 43.693762,
    longitude: -89.777315,
    zoom: 7
  });

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelected(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  useEffect(() => {
    if (props.albums !== undefined || props.albums !== "") {
      setWeddingAlbums(props.weddingAlbums);
      setEngagementAlbums(props.engagementAlbums);
      setInitial(props.loading);
    }
  }, [props]);

  return (
    <div className="map">
      <CardsMap
        key={Math.random()}
        className="map-list"
        weddingAlbums={weddingAlbums}
        engagementAlbums={engagementAlbums}
        setSelected={setSelected}
        handleShow={handleShow}
      />
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
        mapStyle="mapbox://styles/denmercs/ck77u6yc2105e1ilc86oqehqg"
        className="map-mapgl"
        height="86vh"
      >
        {initial ? (
          <SpinnerMap />
        ) : (
          <>
            {weddingAlbums.map(album => (
              <MarkerMap
                key={album.id}
                album={album}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
            ,
            {engagementAlbums.map(album => (
              <MarkerMap
                key={album.id}
                album={album}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
          </>
        )}

        {selected ? (
          <Popup
            key={selected.id}
            latitude={parseFloat(selected.latitude)}
            longitude={parseFloat(selected.longitude)}
            className="popup"
            color="#F6F7FA"
          >
            <InfoPopup
              key={selected.id}
              album={selected}
              show={show}
              handleClose={handleClose}
              handleShow={handleShow}
              initial={initial}
            />
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
};

const mapStateToProps = state => ({
  weddingAlbums: state.facebook.weddingAlbums,
  engagementAlbums: state.facebook.engagementAlbums,
  loading: state.facebook.loading
});

export default connect(mapStateToProps)(Map);
