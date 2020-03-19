import {
  FACEBOOK_ALBUMS_START,
  FACEBOOK_ALBUMS_SUCCESS,
  FACEBOOK_ALBUMS_FAIL,
  REVERSE_GEOLOCATION_START,
  REVERSE_GEOLOCATION_SUCCESS,
  REVERSE_GEOLOCATION_FAIL
  //   FACEBOOK_ALBUM_DATA_START,
  //   FACEBOOK_ALBUM_DATA_SUCCESS,
  //   FACEBOOK_ALBUM_DATA_FAIL
} from "..";
import axios from "../../util/axiosConfig";

export const getAlbums = () => dispatch => {
  dispatch({ type: FACEBOOK_ALBUMS_START });

  axios
    .get("/facebook/albums")
    .then(res => {
      dispatch({
        type: FACEBOOK_ALBUMS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FACEBOOK_ALBUMS_FAIL,
        payload: err.response.data
      });
    });
};

export const getGeoLocation = location => dispatch => {
  dispatch({
    type: REVERSE_GEOLOCATION_START
  });

  axios
    .post("/facebook/geocodes/", location)
    .then(res => {
      dispatch({
        type: REVERSE_GEOLOCATION_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: REVERSE_GEOLOCATION_FAIL,
        payload: err.response.data
      });
    });
};
