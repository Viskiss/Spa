import TodoItem from "./TodoItem";
import styles from "./Todo.module.css";
import { useContext } from "react";
import { TodoContext } from "../../context";

function Todo(props) {
  const {
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
    value,
    setValue,
    dispatchFilter,
    filter,
  } = useContext(TodoContext);

  const submitHandler = (e) => {
    e.preventDefault();

    if (value.trim()) {
      addTodo(value);
    }

    setValue("");
  };

  const handleDeleteTodo = (id) => {
    deleteTodo(id);
  };

  const handleChangeInput = (event) => {
    setValue(event.target.value);
  };

  const handleShowAll = () => {
    dispatchFilter({ type: "SHOW_ALL" });
  };

  const handleShowDone = () => {
    dispatchFilter({ type: "SHOW_DONE" });
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "ALL") {
      return true;
    }

    if (filter === "DONE" && todo.checked) {
      return true;
    }

    return false;
  });

  const redactedTodo = (value, id, checked) => {
    if (!value) {
      handleDeleteTodo(id);
    } else {
      updateTodo({ id, checked, value });
    }
  };

  return (
    <div className={styles.input}>
      <form className={styles.form} onSubmit={submitHandler}>
        <input type="value" value={value} onChange={handleChangeInput} />
        <button type="submit">Add</button>
        <button onClick={handleShowAll}>All</button>
        <button onClick={handleShowDone}>Done</button>
      </form>

      <div className={styles.result}>
        {filteredTodos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            redactedTodo={redactedTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
      </div>
    </div>
  );
}
export default Todo;
