// redux/actions.js
export const ADD_TO_BUILDER = "ADD_TO_BUILDER";

export const addToBuilder = (id) => ({
  type: ADD_TO_BUILDER,
  payload: id,
});
