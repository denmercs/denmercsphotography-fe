import React, { useState, useEffect } from "react";
import "./maps.scss";
import { connect } from "react-redux";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import InfoPopup from "./infopopup";
import MarkerMap from "./markermap";

const Map = props => {
  const [initial, setInitial] = useState();
  const [weddingAlbums, setWeddingAlbums] = useState([]);
  const [engagementAlbums, setEngagementAlbums] = useState([]);
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
      setWeddingAlbums(props.weddingAlbums);
      setEngagementAlbums(props.engagementAlbums);
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
          <>
            {weddingAlbums.map(album => (
              // console.log("on the map component", album);
              <MarkerMap
                key={album.id}
                album={album}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
            ,
            {engagementAlbums.map(album => (
              // console.log("on the map component", album);
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
  weddingAlbums: state.facebook.weddingAlbums,
  engagementAlbums: state.facebook.engagementAlbums,
  loading: state.facebook.loading
});

export default connect(mapStateToProps)(Map);
