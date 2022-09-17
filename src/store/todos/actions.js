export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const addTodoAction = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const deleteTodoAction = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const updateTodoAction = (payload) => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};
