import styles from '../Todo.module.css'
import React, { useState } from "react";

 function TodoItem(props){
  const {
    todo: {
      id,
      value,
    },
    handleDeleteTodo,
    redactedTodo
  } = props;
  
  const [todoValue, setTodoValue] = useState(value);


  const changeInputTodo = (event, value) => {
    setTodoValue(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    
    console.log(todoValue)
    redactedTodo(todoValue, id)
  }
  

    return(
        <div className={styles.result}>
  
          <div className={styles.itemTodo} key={id}>
            <form onSubmit={onSubmit} >
              <input id={id} onBlur={onSubmit} onChange={changeInputTodo} value={todoValue} type="text" />
            </form>
            <button onClick={handleDeleteTodo.bind(null,id)}>Delete</button>
          </div>
    
      </div>
    )
}

export default TodoItem