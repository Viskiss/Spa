import React, { useState } from "react";
import styles from "./Input.module.css";

function Input() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  let result = list.map((element, id = Date()) => {
    return <p key={id}>{element}</p>;
  });

  const submitHandler = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      setText("");
      return;
    }
    console.log(text);
    setList([...list, text]);
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
export default Input;
