import { ADD_FAV, REMOVE_FAV } from "./action-types";

export const addFav = (pj) => {
  return {
    type: ADD_FAV,
    payload: pj,
  };
};

export const removeFav = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
};
