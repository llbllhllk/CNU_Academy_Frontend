// root reducer를 만든다.
// react-redux에서 제공하는 전역 Provider를 통해 store값 들을 App컴포넌트에 전달하기 위해서 reducer들을 전부 합쳐주는 최상위 root인 index.ts에 root reducer을 구현해야한다.

import { combineReducers } from "redux";
import { tasks } from "./tasks";
import logger from "redux-logger";

// import storage from 'redux-persist'
import session from "redux-persist/lib/storage/session";
import { persistReducer, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";

/* 
  redux persist에 대한 설정 object를 만든다.
  whitelist는 해당 상태만 사용할 수 있게 설정한다.
  blacklist는 해당 상태만 사용하지 못하게 설정할 수 있다. 
*/
const persistConfig = {
  key: "root",
  storage: session,
  whitelist: ["tasks"],
};

// 모든 reducer들을 combineReducers에 전달한다.
const combineReducer = combineReducers({ tasks: tasks.reducer });

const rootReducer = persistReducer(persistConfig, combineReducer);

/*
  해당 rootReducer를 가지고 store를 생성하여 export할 수 있게한다.
  + redux-logger: 상태가 변경될 때 console에 로그를 찍어주는 middleware 라이브러리
  + redux-devtools-extension: Redux devtools chrome extension을 통해 정보를 확인할 수 있는 라이브러리
  + redux-persist: 상태가 localStorage나 sessionStorage를 통해 남아 있을 수 있도록 도와주는 middleware 라이브러리
*/

// export const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(logger))
// );

/**
 * 기존 store는 파라미터롤 넣어준 반면에 object를 통해 store를 정의할 수 있다.
 * middleare도 같이 정의할 수 있다.
 * devTools도 기본으로 내장되어있어서 사용여부를 boolean값으로 설정할 수 있다.
 */

export const store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
  devTools: true,
});

// localStorage와 sessionStorage의 저장된 값들을 빼오기 위한 저장소
export const persistor = persistStore(store as any);

// RootState를 rootReducer의 타입으로 지정한다.
export type RootState = ReturnType<typeof store.getState>;
