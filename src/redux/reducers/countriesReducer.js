import { GET_VISITED_COUNTRIES } from "../actions/types";

const initialState = {
  visitedCountriesData: { green: [], yellow: [], gray: [] }
};

const countries = (state = initialState, action) => {
  switch (action.type) {
    case GET_VISITED_COUNTRIES:
      return { ...state, visitedCountriesData: action.payload };
    default:
      return state;
  }
};

export default countries;
