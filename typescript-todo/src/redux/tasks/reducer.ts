import { Action, Task } from "./types";

// state: 기존 상태, action: 변화를 위한 action
// state에 대한 type과 action에 대한 type(type, payload)을 import한다.
export const tasks = (state: Task[] = [], action: Action) => {
  switch (action.type) {
    case "ADD_TASK": {
      const newTask = action.payload;
      return [...state, newTask];
    }
    case "UPDATE_TASK": {
      const updatedTask = action.payload;
      return state.map((oldTask) =>
        oldTask.id === updatedTask.id ? updatedTask : oldTask
      );
    }
    case "REMOVE_TASK": {
      const removedTask = action.payload;
      return state.filter((task) => task.id !== removedTask.id);
    }
    default: {
      return state;
    }
  }
};
