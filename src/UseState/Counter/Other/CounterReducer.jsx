import React, { useReducer } from "react";
import styles from "../common.module.css";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function CounterReduser() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className={styles.item}>
      <h1>CountReducer: {state.count}</h1>
      <div className={styles.buttons}>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      </div>
    </div>
  );
}

export default CounterReduser;
