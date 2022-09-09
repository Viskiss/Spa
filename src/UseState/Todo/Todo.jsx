import { useEffect, useState } from 'react';

import TodoItem from './TodoItem';

import styles from './Todo.module.css';

function Todo(props) {
	const [value, setValue] = useState('');
	const [result, setResult] = useState('');
	const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos') || '[]'));

	useEffect(
    () => {
		  localStorage.setItem('todos', JSON.stringify(todos));
	  },
    [todos],
  );

	const setTodosWithSave = (todos) => {
		setTodos(todos);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		if (value.trim()) {
			setTodos([...todos, { id: Date.now(), value: value }]);
		}

		setValue('');
	};

	const handleDeleteTodo = (id) => {
		const newTodos = todos.filter((todo) => todo.id !== id);

		setTodosWithSave(newTodos);
	};

	const handleChangeInput = (event) => {
		setValue(event.target.value);
	};

	const submitInputTodo = () => {
		if (result.length !== 0) {
			redactedTodo();
		} else {
			alert('empty todo!');
		}

		setResult('');
	};

	const redactedTodo = (value, id) => {
		const findTodo = todos.find((todo) => todo.id === id);

		if (findTodo) {
			if (!value) {
				handleDeleteTodo(id);
			} else {
				findTodo.value = value;

				setTodos([...todos]);
			}
		}
	};

	return (
		<div className={styles.input}>
			<form className={styles.form} onSubmit={submitHandler}>
				<input
          type='value'
          value={value}
          onChange={handleChangeInput}
        />
				<button type='submit'>Add</button>
			</form>
			<div className={styles.result}>
				{todos.map((todo) => (
					<TodoItem
            todo={todo}
						key={todo.id}
						redactedTodo={redactedTodo}
						submitInputTodo={submitInputTodo}
						handleDeleteTodo={handleDeleteTodo}
					/>
				))}
			</div>
		</div>
	);
}
export default Todo;
