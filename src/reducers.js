/* eslint-disable default-case */
import { CHANGE_SEARCH_FIELD } from "./constants";

const initialState = {
  searchField: "",
};

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};
//an alternatives to Object.assign is {...state, searchField: action.payload } spread operator is les verbose
