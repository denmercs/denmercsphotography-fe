import {
  GET_PINTEREST_BOARD_START,
  GET_PINTEREST_BOARD_SUCCESS,
  GET_PINTEREST_BOARD_FAIL
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
    case GET_PINTEREST_BOARD_START:
      return {
        ...state,
        loading: true
      };
    case GET_PINTEREST_BOARD_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        pinterest: action.payload
      };
    case GET_PINTEREST_BOARD_FAIL:
      return {
        ...state,
        success: false,
        error: action.payload
      };
    default:
      return state;
  }
}
