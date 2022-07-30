import axios from "axios";
import * as types from "./todo.actionTypes";

export const addTodoAPI = (todo) => (dispatch) => {
  return axios.post("http://localhost:8080/products", todo).then((res) => {
    dispatch({ type: types.ADD_TODOS_SUCCESS });
  });
};

export const getTododAPI = () => (dispatch) => {
  return axios.get("http://localhost:8080/products").then((res) => {
    dispatch({ type: types.GET_TODOS_SUCCESS, payload: res.data });
  });
};

export const toggleTodoAPI = (todo) => (dispatch) => {
  return axios
    .patch(`http://localhost:8080/products/${todo.id}`, {
      status: !todo.status,
    })
    .then((res) => {
      dispatch({ type: types.TOGGLE_TODOS_SUCCESS, payload: res.data });
    });
};

export const deleteTodoAPI = (id) => (dispatch) => {
  return axios.delete(`http://localhost:8080/products/${id}`).then((res) => {
    dispatch({ type: types.DELETE_TODOS_SUCCESS, payload: res.data });
  });
};

export const editTodoAPI = (el) => (dispatch) => {
  return axios
    .put(`http://localhost:8080/products/${el.id}`, el)
    .then((res) => {
      dispatch({ type: types.EDIT_TODOS_SUCCESS, payload: res.data });
    });
};
