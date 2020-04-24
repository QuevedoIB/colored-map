import { SET_SIZES } from "../actions/types";

const initialState = { sizes: {} };

const sizes = (state = initialState, action) => {
  switch (action.type) {
    case SET_SIZES:
      return { ...state, sizes: action.payload };
    default:
      return state;
  }
};

export default sizes;
