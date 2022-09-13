import Simple from "./Effect/Simple";
import Counter from "./Other/Counter";
import styles from "./common.module.css";
import CounterReduser from "./Other/CounterReducer";

export function Common() {
  return (
    <div className={styles.body}>
      <Simple />
      <Counter />
      <CounterReduser />
    </div>
  );
}
