import { ActionTypes } from "../Constants/ActionTypes";

export const addProject = (data) => {
  return {
    type: ActionTypes.ADD,
    payload: data,
  };
};

export const deleteProject = (id) => {
  return {
    type: ActionTypes.DELETE,
    payload: id,
  };
};

export const updateProject = (data) => {
  return {
    type: ActionTypes.UPDATE,
    payload: data,
  };
};
