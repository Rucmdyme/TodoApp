import React, { useState, useParams } from "react";

const Todo = ({ todos, removeTodo, editTodo, changePriority }) => {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const handleEditSubmit = (e, id) => {
    e.preventDefault();

    editTodo({
      id,
      text: editText,
      time: new Date().toLocaleTimeString(),
    });
    setEditId(null);
    setEditText("");
  };

  const startEditing = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text/plain", id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    const droppedId = e.dataTransfer.getData("text/plain");
    const priorityId = e.currentTarget.getAttribute("data-id");
    changePriority(droppedId, priorityId);
  };

  return todos.map((todo, index) => (
    <div
      key={index}
      className=""
      draggable
      onDragStart={(e) => handleDragStart(e, todo.id)}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      data-id={todo.id}
    >
      {todo.id === editId ? (
        <form className="todo-row">
          <input
            type="text"
            value={editText}
            onChange={handleEditChange}
            className="todo-edit-input"
          />
          <button
            onClick={(e) => handleEditSubmit(e, todo.id)}
            className="save-icon"
          >
            Save
          </button>
        </form>
      ) : (
        <div key={index} className="todo-row">
          <div className="todo-row-task">
            <div>{todo.text}</div>
            <div className="todo-time">{todo.time}</div>
          </div>
          <div>
            <button onClick={() => removeTodo(todo.id)} className="delete-icon">
              delete
            </button>
            <button
              onClick={() => startEditing(todo.id, todo.text)}
              className="edit-icon"
            >
              edit
            </button>
          </div>
        </div>
      )}
    </div>
  ));
};

export default Todo;
