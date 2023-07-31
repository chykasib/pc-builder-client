// redux/reducers.js
import { combineReducers } from "redux";
import { ADD_TO_BUILDER } from "./actions";

const selectedComponentsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_BUILDER:
      return [...state, action.payload];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  selectedComponents: selectedComponentsReducer,
});

export default rootReducer;
