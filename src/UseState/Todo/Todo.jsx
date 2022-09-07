import React, { useState } from "react";
import styles from "./Todo.module.css";
import { Todos } from "./data";
import { useEffect } from "react";

function Todo() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  let result = todo.map((value, id) => {
    return (
      <div className={styles.itemTodo} key={id}>
        {value}
        <button
          onClick={() => setTodo((prev) => prev.filter((value, i) => i !== id))}
        >
          Delete
        </button>
      </div>
    );
  });

  const submitHandler = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      setText("");
      return;
    }
    console.log(text);
    // Todos.value = text;
    setTodo([...todo, text]);
    setText("");
  };

  let TextInput = (event) => {
    setText(event.target.value);
  };

  return (
    <div className={styles.input}>
      <form className={styles.form} onSubmit={submitHandler}>
        <input value={text} onChange={TextInput} type="text" />
        <button type="submit">Add</button>
      </form>
      <div className={styles.result}>{result}</div>
    </div>
  );
}
export default Todo;
