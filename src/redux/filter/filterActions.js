import { SET_FILTER } from "./filterTypes";

export const setFilter = value => ({
  type: SET_FILTER,
  payload: value,
});
