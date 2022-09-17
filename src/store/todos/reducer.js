import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actions";

export const initialTodos = {
  todos: JSON.parse(localStorage.getItem("todos") || "[]"),
};

const reducer = (state = initialTodos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            value: action.payload,
            checked: false,
          },
        ],
      };

    case UPDATE_TODO: {
      const findedIdx = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );

      if (findedIdx !== -1) {
        state.todos[findedIdx] = action.payload;
        return { todos: [...state.todos] };
      }

      return state;
    }
    case DELETE_TODO: {
      const filtredTodo = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return { todos: filtredTodo };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
