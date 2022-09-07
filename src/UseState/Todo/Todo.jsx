import { useState } from "react";

import styles from "./Todo.module.css";

function Todo() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (text.trim()) {
      setTodos([...todos, { id: Date.now(), value: text }]);
    }

    setText("");
  };

  const handleChangeInput = (event) => {
    setText(event.target.value);
  };

  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  };

  return (
    <div className={styles.input}>
      <form className={styles.form} onSubmit={submitHandler}>
        <input
          type="text"
          value={text}
          onChange={handleChangeInput}
        />
        <button type="submit">
          Add
        </button>
      </form>
      <div className={styles.result}>
        {
          todos.map(({ value, id }) => (
            <div className={styles.itemTodo} key={id}>
              <span>
                {value}
              </span>
              <button onClick={handleDeleteTodo.bind(null, id)}>
                Delete
              </button>
            </div>
          ))
        }
      </div>
    </div>
  );
}
export default Todo;
