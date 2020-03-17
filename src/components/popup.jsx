import React from "react";
import { getPinterest } from "../store/actions/facebookActions";
import { connect } from "react-redux";

const InfoPopup = props => {
  const album = props.album;
  const ceremony = props.album.ceremony;
  const reception = props.album.reception;

  return (
    <>
      <div>
        <h2>{album.client}</h2>
        {ceremony.locationName === reception.locationName ? (
          <>
            <p>Ceremony & Reception: {ceremony.locationName}</p>
            <p>City: {ceremony.city}</p>
          </>
        ) : (
          <>
            <p>Ceremony: {ceremony.locationName}</p>
            <p>Reception: {reception.locationName}</p>
            <p>City: {ceremony.city}</p>
          </>
        )}
        {album.story ? <p>Story: {album.story}</p> : null}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    pinterest: state.pinterest
  };
};

const mapDispatchToProps = {
  getPinterest
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoPopup);
