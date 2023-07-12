import React, { useState } from "react";
const TodoForm = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      id: Math.floor(Math.random() * 999999),
      text: input,
      time: new Date().toLocaleTimeString(),
    });
    setInput("");
  };

  return (
    <form className="todo-form">
      <input
        placeholder="Type here"
        value={input}
        onChange={handleChange}
        name="text"
        className="todo-input"
      />

      <button onClick={handleSubmit} className="todo-button">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
