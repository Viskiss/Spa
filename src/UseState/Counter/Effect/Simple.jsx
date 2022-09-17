import { useState, useEffect } from "react";
import styles from '../common.module.css'

function Simple() {
  const [type, setType] = useState("...");

  useEffect(() => {}, [type]);

  return (
    <div className={styles.item}>
      <div>
      <h1 >Resours: {type}</h1>

      </div>
      <div className={styles.buttons}>
         <button onClick={() => setType("Counter")}>Counter</button>
      <button onClick={() => setType("Todo")}>Todo</button>
      <button onClick={() => setType("Product list")}>Product list</button>
      </div>
     
    </div>
  );
}

export default Simple;
