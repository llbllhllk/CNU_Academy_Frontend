import {
  PayloadAction,
  createAction,
  createReducer,
  createSlice,
} from "@reduxjs/toolkit";
import { v4 } from "uuid";

export interface Task {
  id: string;
  content: string;
  complete: boolean;
}

// action (createAction)
// 첫번째 파라미터는 해당 action의 type을 정의한다.(모듈 단위 형태로 지정하였다.)
// prepare action(어떤식으로 제어할지에 대한 함수를 넘긴다.)
// 타입 정의를 따로 하지 않아도 되는 장점이 있다.
// export const addTask = createAction("tasks/add", (content: string) => {
//   return {
//     payload: {
//       id: v4(),
//       content,
//       complete: false,
//     },
//   };
// });

// export const updateTask = createAction(
//   "tasks/update",
//   (id: string, content, complete: boolean) => {
//     return {
//       payload: {
//         id,
//         content,
//         complete,
//       },
//     };
//   }
// );

// export const removeTask = createAction("tasks/remove", (id: string) => {
//   return {
//     payload: {
//       id,
//       content: "",
//       complete: false,
//     },
//   };
// });

// reducer (createReducer)
// 기본 값(state),

// export const tasks = createReducer([] as Task[], {
//   [addTask.type]: (state: Task[], action: PayloadAction<Task>) => {
//     state.push(action.payload);
//   },
//   [updateTask.type]: (state: Task[], action: PayloadAction<Task>) => {
//     const index = state.findIndex((task) => task.id === action.payload.id);
//     state[index] = action.payload;
//   },
//   [removeTask.type]: (
//     state: Task[],
//     action: PayloadAction<Pick<Task, "id">>
//   ) => {
//     const index = state.findIndex((task) => task.id == action.payload.id);
//     if (index !== 1) state.splice(index, 1);
//   },
// });

// action과 reducer를 하나로 합치기
// name: action과 reducer를 합친 모듈의 이름을 정의한다.
// initialState: 초기 값
// reducers: action과 reducer를 작성한다.
export const tasks = createSlice({
  name: "tasks",
  initialState: [] as Task[],
  reducers: {
    add: {
      reducer: (state: Task[], action: PayloadAction<Task>) => {
        state.push(action.payload);
      },
      prepare: (content: string) => ({
        payload: {
          id: v4(),
          content,
          complete: false,
        },
      }),
    },
    update: {
      reducer: (state: Task[], action: PayloadAction<Task>) => {
        const index = state.findIndex((task) => task.id === action.payload.id);
        state[index] = action.payload;
      },
      prepare: (id: string, content: string, complete: boolean) => ({
        payload: {
          id,
          content,
          complete,
        },
      }),
    },
    remove: {
      reducer: (state: Task[], action: PayloadAction<Task>) => {
        const index = state.findIndex((task) => task.id === action.payload.id);
        if (index !== -1) state.splice(index, 1);
      },
      prepare: (id: string) => ({
        payload: {
          id,
          content: "",
          complete: false,
        },
      }),
    },
  },
});
