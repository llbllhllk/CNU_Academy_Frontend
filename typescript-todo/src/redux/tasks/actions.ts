import { Action } from "./types";
import { v4 } from "uuid";

// reducer에서 사용할 수 있도록 action을 정의한다.
export const addTask = (content: string): Action => {
  return {
    type: "ADD_TASK",
    payload: {
      id: v4(),
      content,
      complete: false,
    },
  };
};

export const updateTask = (
  id: string,
  content: string,
  complete: boolean
): Action => {
  return {
    type: "UPDATE_TASK",
    payload: {
      id,
      content,
      complete,
    },
  };
};

export const removeTask = (id: string): Action => {
  return {
    type: "REMOVE_TASK",
    payload: {
      id,
      content: "",
      complete: false,
    },
  };
};
