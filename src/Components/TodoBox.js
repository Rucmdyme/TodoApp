import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import SearchBar from "./SearchBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const savedTodos = () => {
  const saved = localStorage.getItem("todos");
  if (saved) return JSON.parse(saved);
  else return [];
};

function TodoBox() {
  const [todos, setTodos] = useState(savedTodos);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const removed = [...todos].filter((todo) => todo.id !== id);
    setTodos(removed);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const editTodo = (updatedTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) =>
    todo?.text?.includes(searchQuery)
  );

  const changePriority = (draggedId, droppedId) => {
    const updatedTodos = [...todos];
    const draggedIndex = updatedTodos.findIndex((todo) => todo.id == draggedId);
    const droppedIndex = updatedTodos.findIndex((todo) => todo.id == droppedId);
    const draggedTodo = updatedTodos[draggedIndex];
    const droppedTodo = updatedTodos[droppedIndex];

    updatedTodos[draggedIndex] = droppedTodo;
    updatedTodos[droppedIndex] = draggedTodo;

    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>Set your goals for the day</h1>
      {/* <TodoForm onSubmit={addTodo} />
      <SearchBar onSearch={handleSearch} />
      <Todo
        todos={filteredTodos}
        removeTodo={removeTodo}
        editTodo={editTodo}
        changePriority={changePriority}
      /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoForm onSubmit={addTodo} />} />
          <Route path="/home" element={<SearchBar onSearch={handleSearch} />} />
          <Route
            path="/todo"
            element={
              <Todo
                todos={filteredTodos}
                removeTodo={removeTodo}
                editTodo={editTodo}
                changePriority={changePriority}
              />
            }
          />
          <Route path="*" element={<h1>Error..</h1>} />s
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default TodoBox;
