import {
  FACEBOOK_ALBUMS_START,
  FACEBOOK_ALBUMS_SUCCESS,
  FACEBOOK_ALBUMS_FAIL,
  REVERSE_GEOLOCATION_START,
  REVERSE_GEOLOCATION_SUCCESS,
  REVERSE_GEOLOCATION_FAIL
  // FACEBOOK_ALBUM_DATA_START,
  // FACEBOOK_ALBUM_DATA_SUCCESS,
  // FACEBOOK_ALBUM_DATA_FAIL
} from "..";

const initialState = {
  albums: [],
  albumDatas: [],
  geoCode: [],
  loading: false,
  success: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FACEBOOK_ALBUMS_START:
      return {
        ...state,
        loading: true
      };
    case FACEBOOK_ALBUMS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        albums: action.payload
      };
    case FACEBOOK_ALBUMS_FAIL:
      return {
        ...state,
        success: false,
        error: action.payload
      };
    case REVERSE_GEOLOCATION_START:
      return {
        ...state,
        loading: true
      };
    case REVERSE_GEOLOCATION_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        geoCode: action.payload
      };
    case REVERSE_GEOLOCATION_FAIL:
      return {
        ...state,
        success: false,
        error: action.payload
      };
    default:
      return state;
  }
}
