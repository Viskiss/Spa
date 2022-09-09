import React, { useState } from "react";
import { useEffect } from "react";
import { Todos } from "../../constans/data";
import styles from "./Todo.module.css";
import  TodoItem  from "./TodoItem";

function Todo(props) {

  const [value, setValue] = useState("");
  // const [todos, setTodos] = useState(Todos);
  const [result, setResult] = useState("");
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos") || "[]")
  );

  useEffect(
    () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    },
    [todos],
  );

  const setTodosWithSave = (todos) => {
    setTodos(todos);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (value.trim()) {
      setTodos([...todos, { id: Date.now(), value: value }]);
    }
    console.log(value);
    setValue("");
  };

  const handleDeleteTodo = (id) => {
    const newTodos =todos.filter((todo) => todo.id !== id);
    setTodosWithSave(newTodos);
  };

  const handleChangeInput = (event) => {
    setValue(event.target.value);
  };

  // const changeInputTodo = (event, value) => {
  //   setResult(event.target.value);
  // };

  const submitInputTodo = () => {
    if (result.length !== 0) {
      redactedTodo();
    } else {
      alert("empty todo!");
    }
    setResult("");
  };

  const redactedTodo = (value, id) => {
     const findTodo = todos.find((todo) => todo.id === id)
    if(!value) {
      handleDeleteTodo(id)
    } else if (findTodo) {
 findTodo.value = value
      setTodos([...todos]);
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
        {todos.map((todo) => (
          <TodoItem redactedTodo={redactedTodo} submitInputTodo={submitInputTodo}  handleDeleteTodo={handleDeleteTodo} todo={todo} key={todo.id}/>
        ))}
        {/* {todos.map(({ value, id }) => (
          <div className={styles.itemTodo} key={id}>
            <form onSubmit={submitInputTodo}>
              {value}
              <input
                id={id}
                onChange={changeInputTodo}
                value={result}
                type="text"
              />
            </form>
            <button onClick={handleDeleteTodo.bind(null, id)}>Delete</button>
          </div>
        ))} */}
      </div>
    </div>
  );
}
export default Todo;
