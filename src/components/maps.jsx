import React, { useState, useEffect } from "react";
import "./maps.scss";
import { connect } from "react-redux";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import camera from "../assets/camera.svg";
import InfoPopup from "./popup";

const Map = props => {
  const [initial, setInitial] = useState();
  const [albums, setAlbums] = useState([]);
  const [selected, setSelected] = useState(null);
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 43.693762,
    longitude: -89.777315,
    zoom: 7
  });

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
      setAlbums(props.albums);
      setInitial(props.loading);
    }
  }, [props]);

  return (
    <>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
        mapStyle="mapbox://styles/denmercs/ck77u6yc2105e1ilc86oqehqg"
      >
        {initial ? (
          <h3>Loading</h3>
        ) : (
          albums.map(album => (
            <Marker
              key={album.id}
              latitude={parseFloat(album.latitude)}
              longitude={parseFloat(album.longitude)}
            >
              <button
                className="marker-camera"
                onClick={e => {
                  e.preventDefault();
                  setSelected(album);
                }}
              >
                <img src={camera} alt="camera icon" />
              </button>
            </Marker>
          ))
        )}

        {selected ? (
          <Popup
            key={selected.id}
            latitude={parseFloat(selected.latitude)}
            longitude={parseFloat(selected.longitude)}
            onClose={() => {
              setSelected(null);
            }}
            className="popup"
          >
            <InfoPopup album={selected} />
          </Popup>
        ) : null}
      </ReactMapGL>
    </>
  );
};

const mapStateToProps = state => ({
  loading: state.facebook.loading,
  albums: state.facebook.albums,
  geoCode: state.facebook.geoCode
});

export default connect(mapStateToProps)(Map);
