import React, { useEffect } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoAction,
  changePriorityAction,
  editTodoAction,
  removeTodoAction,
  searchQueryAction,
} from "./action";

const TodoBox = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const searchQuery = useSelector((state) => state.searchQuery);

  useEffect(() => {
    console.log("todos", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    dispatch(addTodoAction(todo));
  };

  const removeTodo = (id) => {
    dispatch(removeTodoAction(id));
  };

  const handleSearch = (query) => {
    dispatch(searchQueryAction(query));
  };

  const editTodo = (updatedTodo) => {
    dispatch(editTodoAction(updatedTodo));
  };

  const filteredTodos = todos.filter((todo) =>
    todo?.text?.includes(searchQuery)
  );

  const changePriority = (draggedId, droppedId) => {
    dispatch(changePriorityAction(draggedId, droppedId));
  };

  return (
    <>
      <h1>Set your goals for the day</h1>
      <TodoForm onSubmit={addTodo} />
      <SearchBar onSearch={handleSearch} />
      <Todo
        todos={filteredTodos}
        removeTodo={removeTodo}
        editTodo={editTodo}
        changePriority={changePriority}
      />
    </>
  );
};

export default TodoBox;
