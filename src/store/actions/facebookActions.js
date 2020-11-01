import {
  FACEBOOK_WEDDING_ALBUMS_START,
  FACEBOOK_WEDDING_ALBUMS_SUCCESS,
  FACEBOOK_WEDDING_ALBUMS_FAIL,
  FACEBOOK_ENGAGEMENT_ALBUMS_START,
  FACEBOOK_ENGAGEMENT_ALBUMS_SUCCESS,
  FACEBOOK_ENGAGEMENT_ALBUMS_FAIL,
  FACEBOOK_GET_PHOTOS_START,
  FACEBOOK_GET_PHOTOS_SUCCESS,
  FACEBOOK_GET_PHOTOS_FAIL,
  FACEBOOK_WEDDING_INFO_START,
  FACEBOOK_WEDDING_INFO_SUCCESS,
  FACEBOOK_WEDDING_INFO_FAIL,
} from "..";
import axios from "../../util/axiosConfig";

export const getWeddingAlbums = () => (dispatch) => {
  dispatch({ type: FACEBOOK_WEDDING_ALBUMS_START });

  axios
    .get("/facebook/wedding/albums")
    .then((res) => {
      dispatch({
        type: FACEBOOK_WEDDING_ALBUMS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: FACEBOOK_WEDDING_ALBUMS_FAIL,
        payload: err,
      });
    });
};

export const getWeddingInfo = () => (dispatch) => {
  dispatch({ type: FACEBOOK_WEDDING_INFO_START });

  axios
    .get("/facebook/weddings")
    .then((res) => {
      dispatch({
        type: FACEBOOK_WEDDING_INFO_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: FACEBOOK_WEDDING_INFO_FAIL,
        payload: err,
      });
    });
};

export const getEngagementAlbums = () => (dispatch) => {
  dispatch({ type: FACEBOOK_ENGAGEMENT_ALBUMS_START });

  axios
    .get("/facebook/engagement/albums")
    .then((res) => {
      dispatch({
        type: FACEBOOK_ENGAGEMENT_ALBUMS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: FACEBOOK_ENGAGEMENT_ALBUMS_FAIL,
        payload: err,
      });
    });
};

export const getPhotosById = (id) => (dispatch) => {
  dispatch({ type: FACEBOOK_GET_PHOTOS_START });

  axios
    .post(`/facebook/album/${id}`)
    .then((res) => {
      dispatch({
        type: FACEBOOK_GET_PHOTOS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: FACEBOOK_GET_PHOTOS_FAIL,
        payload: err,
      });
    });
};
