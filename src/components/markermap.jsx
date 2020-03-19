import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import data from "../util/data.json";
import "./maps.scss";
import camera from "../assets/camera.svg";
import InfoPopup from "./popup";

const MarkerMap = () => {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 43.693762,
    longitude: -89.777315,
    zoom: 7
  });

  const [selected, setSelected] = useState(null);

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
        {data.albums.map(album => (
          <Marker
            key={album.id}
            latitude={album.ceremony.latitude}
            longitude={album.ceremony.longitude}
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
        ))}

        {selected ? (
          <Popup
            key={selected.id}
            latitude={selected.ceremony.latitude}
            longitude={selected.ceremony.longitude}
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
export default MarkerMap;
