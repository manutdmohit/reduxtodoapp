export const AddTodoAction = (todo) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();

  const hasTodo = todos.find((i) => i.todo === todo); // returns a boolean value //

  if (!hasTodo && todo !== '') {
    dispatch({
      type: 'ADD_TODO',
      payload: [{ id: Date.now(), todo }, ...todos],
    });
  }
};

export const RemoveTodoAction = (todo) => (dispatch, getState) => {
  const { Todo: {todos} } = getState();

  dispatch({
    type: 'REMOVE_TODO',
    payload: todos.filter((t) => t.id !== todo.id),
  });
};
