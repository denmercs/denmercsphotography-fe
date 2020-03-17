import {
  FACEBOOK_PAGE_START,
  FACEBOOK_PAGE_SUCCESS,
  FACEBOOK_PAGE_FAIL
} from "..";

const initialState = {
  user: [],
  pinterest: [],
  loading: false,
  success: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FACEBOOK_PAGE_START:
      return {
        ...state,
        loading: true
      };
    case FACEBOOK_PAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        pinterest: action.payload
      };
    case FACEBOOK_PAGE_FAIL:
      return {
        ...state,
        success: false,
        error: action.payload
      };
    default:
      return state;
  }
}
