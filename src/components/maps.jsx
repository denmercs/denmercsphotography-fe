import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import data from "../util/data.json";
import "./maps.scss";
import camera from "../assets/camera.svg";

const Map = () => {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 43.0731,
    longitude: -89.4012,
    zoom: 6.5
  });

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
            latitude={album.latitude}
            longitude={album.longitude}
          >
            <button className="marker-camera">
              <img src={camera} alt="camera icon" />
            </button>
          </Marker>
        ))}
      </ReactMapGL>
    </>
  );
};

export default Map;
