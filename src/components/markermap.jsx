import React, { useState, useEffect } from "react";
import { Marker } from "react-map-gl";
import camera from "../assets/camera.svg";

const MarkerMap = props => {
  return (
    <>
      <Marker
        key={props.album.id}
        latitude={parseFloat(props.album.latitude)}
        longitude={parseFloat(props.album.longitude)}
      >
        <button
          className="marker-camera"
          onClick={e => {
            e.preventDefault();
            props.setSelected(props.album);
          }}
        >
          <img src={camera} alt="camera icon" />
        </button>
      </Marker>
    </>
  );
};
export default MarkerMap;
