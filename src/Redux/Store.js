import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/auth.reducer";
import { todoReducer } from "./Todo/todo.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  todo: todoReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
