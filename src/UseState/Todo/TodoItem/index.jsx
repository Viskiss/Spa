import { useState } from 'react';

import styles from '../Todo.module.css';

function TodoItem(props) {
	const {
		todo: { id, value },
		handleDeleteTodo,
		redactedTodo,
	} = props;

	const [todoValue, setTodoValue] = useState(value);

	const changeInputTodo = (event) => {
		setTodoValue(event.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();

		redactedTodo(todoValue, id);
	};

	return (
		<div className={styles.result}>
			<div className={styles.itemTodo} key={id}>
				<form onSubmit={onSubmit}>
					<input
						type='text'
						id={id}
						value={todoValue}
						onBlur={onSubmit}
						onChange={changeInputTodo}
					/>
				</form>
				<button onClick={handleDeleteTodo.bind(null, id)}>Delete</button>
			</div>
		</div>
	);
}

export default TodoItem;
