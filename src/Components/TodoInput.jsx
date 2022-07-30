import React, { useState } from "react";
import TodoList from "./TodoList";
import { useDispatch } from "react-redux";
import { addTodoAPI, getTododAPI } from "../Redux/Todo/todo.action";

const TodoInput = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    const payload = {
      id: Date.now(),
      title: value,
      status: false,
    };
    dispatch(addTodoAPI(payload)).then((res) => {
      dispatch(getTododAPI());
    });
    setValue("");
  };
  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={value}
        placeholder="Add something"
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleAddTodo}>ADD</button>
      <TodoList value={value}></TodoList>
    </div>
  );
};

export default TodoInput;
