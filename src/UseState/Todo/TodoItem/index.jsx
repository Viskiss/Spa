import { useState } from "react";
import styles from "../Todo.module.css";
import icon from "../../../constans/img/icons.png";
import { CheckTodo } from "./checkTodo";

function TodoItem(props) {
  const {
    todo: { id, value, checked },
    handleDeleteTodo,
    redactedTodo,
  } = props;

  const [todoValue, setTodoValue] = useState(value);

  const styleEnd = `${styles.todoEnd}`;
  const style = checked ? styleEnd : `${styles.itemTodo}`;

  const changeInputTodo = (event) => {
    setTodoValue(event.target.value);
  };

  const handleCheckedTodo = (event) => {
    redactedTodo(todoValue, id, event.target.checked);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    redactedTodo(todoValue, id, checked);
  };

  return (
    <div className={styles.result}>
      <div className={style} key={id}>
        <form onSubmit={onSubmit}>
          <CheckTodo checked={checked} handleCheckedTodo={handleCheckedTodo} />

          <input
            className={styles.inputValue}
            type="text"
            id={id}
            value={todoValue}
            disabled={checked}
            onBlur={onSubmit}
            onChange={changeInputTodo}
          />
        </form>
        <button
          className={styles.btnDelete}
          onClick={handleDeleteTodo.bind(null, id)}
        >
          <img src={icon}></img>
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
