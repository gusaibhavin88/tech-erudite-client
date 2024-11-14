import { combineReducers } from "@reduxjs/toolkit";
import authSliceReducer from "./Auth/AuthSlice";

const combinedReducer = combineReducers({
  auth: authSliceReducer,
});

export const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};
