import styles from "../Todo.module.css";

export function CheckTodo(props) {
  const { checked, handleCheckedTodo } = props;

  return (
    <label className={styles.switch}>
      <input
        onChange={handleCheckedTodo}
        type="checkbox"
        disabled={checked}
        checked={checked}
      />
      <span className={styles.slider}></span>
    </label>
  );
}
