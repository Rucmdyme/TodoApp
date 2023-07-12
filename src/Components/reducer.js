const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  searchQuery: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };

    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "SEARCH_QUERY":
      return {
        ...state,
        searchQuery: action.payload,
      };
    case "CHANGE_PRIORITY":
      const { draggedId, droppedId } = action.payload;
      const updatedTodos = [...state.todos];
      const draggedIndex = updatedTodos.findIndex(
        (todo) => todo.id == draggedId
      );
      const droppedIndex = updatedTodos.findIndex(
        (todo) => todo.id == droppedId
      );
      const draggedTodo = updatedTodos[draggedIndex];
      const droppedTodo = updatedTodos[droppedIndex];

      updatedTodos[draggedIndex] = droppedTodo;
      updatedTodos[droppedIndex] = draggedTodo;

      return {
        ...state,
        todos: updatedTodos,
      };

    default:
      return state;
  }
};

export default reducer;
