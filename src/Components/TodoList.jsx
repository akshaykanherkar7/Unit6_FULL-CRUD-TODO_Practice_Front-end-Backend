import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodoAPI,
  editTodoAPI,
  getTododAPI,
  toggleTodoAPI,
} from "../Redux/Todo/todo.action";

const TodoList = ({ value }) => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);
  console.log("todos:", todos);

  useEffect(() => {
    dispatch(getTododAPI());
  }, [dispatch]);

  const handleToggleTodo = (todo) => {
    dispatch(toggleTodoAPI(todo)).then((res) => {
      dispatch(getTododAPI());
    });
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodoAPI(id)).then((res) => {
      dispatch(getTododAPI());
    });
  };

  const handleEditTodo = (el) => {
    el.title = value;
    dispatch(editTodoAPI(el)).then((res) => {
      dispatch(getTododAPI());
    });
  };
  return (
    <div>
      {todos.length > 0 &&
        todos.map((el) => {
          return (
            <div key={el.id}>
              <div>{el.title}</div>
              <div>{el.status ? "Completed" : "notCompleted"}</div>
              <div>
                <button onClick={() => handleToggleTodo(el)}>Toggle</button>
                <button onClick={() => handleDeleteTodo(el.id)}>Remove</button>
                <button onClick={() => handleEditTodo(el)}>Edit</button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default TodoList;
