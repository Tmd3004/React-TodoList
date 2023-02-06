import React, { useRef } from "react";

const Form = ({
  todos,
  setTodos,
  inputText,
  setInputText,
  setStatus,
  editTodo,
  setEditTodo,
}) => {
  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const updateTodo = (text, id, completed) => {
    const newTodo = [...todos]
    newTodo.map((todo) => {
      if (todo.id === id) {
        todo.text = text
        todo.completed = completed
      } else {
        return todo
      }}
    )
    setTodos(newTodo)
    setEditTodo('')
    setInputText('')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.random() * 1000 },
      ]);
      setInputText("");
      inputRef.current.focus();
    } else {
      updateTodo( inputText, editTodo.id, editTodo.completed);
    }
  };


  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  const inputRef = useRef();

  return (
    <div>
      <form>
        <input
          value={inputText}
          onChange={handleInputText}
          type="text"
          className="todo-input"
          ref={inputRef}
        />
        <button className="todo-button" type="submit" onClick={handleSubmit}>
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo" onChange={handleStatus}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
