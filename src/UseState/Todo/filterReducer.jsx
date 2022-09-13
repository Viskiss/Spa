export const filtTodos = {
  todos: JSON.parse(localStorage.getItem("todos") || "[]"),
  filtered: [],
};

const filterReducer = (state = filtTodos.filtered, action) => {
  console.log(state);

  switch (action.type) {
    case "SHOW_ALL":
      return "ALL";
    case "SHOW_DONE":
      return "DONE";
    default:
      throw new Error();
  }
};

export default filterReducer;
