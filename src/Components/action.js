export const addTodoAction = (todo) => {
  return {
    type: "ADD_TODO",
    payload: todo,
  };
};

export const removeTodoAction = (id) => {
  return {
    type: "REMOVE_TODO",
    payload: id,
  };
};

export const searchQueryAction = (query) => {
  return {
    type: "SEARCH_QUERY",
    payload: query,
  };
};

export const editTodoAction = (updatedTodos) => {
  return {
    type: "EDIT_TODO",
    payload: updatedTodos,
  };
};
export const changePriorityAction = (draggedId, droppedId) => {
  return {
    type: "CHANGE_PRIORITY",
    payload: { draggedId, droppedId },
  };
};
