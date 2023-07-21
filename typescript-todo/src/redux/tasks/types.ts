// state
// actions types
// action(type, payload)

export interface Task {
  id: string;
  content: string;
  complete: boolean;
}

export type ActionTypes = "ADD_TASK" | "UPDATE_TASK" | "REMOVE_TASK";

export interface Action {
  type: ActionTypes;
  payload: Task;
}
