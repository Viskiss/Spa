import { useState, useEffect } from "react";
import React from "react";
import reducer, { initialTodos } from "./store/todos/reducer";
import {
  addTodoAction,
  deleteTodoAction,
  updateTodoAction,
} from "./store/todos/actions";
import filterReducer from "./UseState/Todo/filterReducer";

export const TodoContext = React.createContext();

const TodoContextProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialTodos);
  const [filter, dispatchFilter] = React.useReducer(filterReducer, "ALL");

  const [checked, setChecked] = useState();
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);

  //
  const addTodo = (value) => {
    dispatch(addTodoAction(value));
  };

  const deleteTodo = (id) => {
    dispatch(deleteTodoAction(id));
  };

  const updateTodo = (todo) => {
    dispatch(updateTodoAction(todo));
  };

  return (
    <TodoContext.Provider
      value={{
        dispatchFilter,
        filter,
        deleteTodo,
        updateTodo,
        todos: state.todos,
        addTodo,
        checked: checked,
        setChecked: setChecked,
        value: value,
        setValue: setValue,
        result: result,
        setResult: setResult,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
