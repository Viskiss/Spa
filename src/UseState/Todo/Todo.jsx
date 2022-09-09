import React, { useState } from "react";
import { useEffect } from "react";
import { Todos } from "../../constans/data";
import styles from "./Todo.module.css";
// import { todoItem } from "./Item/todoItem";

function Todo() {
  const [value, setValue] = useState("");
  // const [todos, setTodos] = useState(Todos);
  const [result, setResult] = useState("");
  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  const setTodosWithSave = (todos) => {
    setTodos(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (value.trim()) {
      setTodosWithSave([...todos, { id: Date.now(), value: value }]);
    }
    console.log(value);
    setValue("");
  };

  const handleDeleteTodo = (id) => {
    const newTodos = [...todos].filter((todo) => todo.id !== id);
    setTodosWithSave(newTodos);
    // setTodosWithSave((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleChangeInput = (event) => {
    setValue(event.target.value);
  };

  const changeInputTodo = (event, value) => {
    setResult(event.target.value);
    value = result;
  };

  const submitInputTodo = (event, value, id) => {
    event.preventDefault();
    redactedTodo();
    setResult("");
    console.log(result);
  };

  const redactedTodo = (value, id) => {
    if (todos.id === id) {
      setTodos([{ id: todos.id, value: result }]);
    }
  };

  return (
    <div className={styles.input}>
      <form className={styles.form} onSubmit={submitHandler}>
        <input value={value} onChange={handleChangeInput} type="value" />
        <button type="submit">Add</button>
      </form>
      {/* <todoItem /> */}
      <div className={styles.result}>
        {todos.map(({ value, id }) => (
          <div className={styles.itemTodo} key={id}>
            <form onSubmit={submitInputTodo}>
              {value}
              <input
                id={todos.id}
                onChange={changeInputTodo}
                value={result}
                type="text"
              />
            </form>
            <button onClick={handleDeleteTodo.bind(null, id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Todo;
