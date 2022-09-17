import React, { useState } from "react";
import styles from "../common.module.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.item}>
      <h1>Counter: {count}</h1>
      <div className={styles.buttons}>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
}
export default Counter;
