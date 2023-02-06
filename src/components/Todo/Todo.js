import React from "react";

const Todo = ({ text, todo, index, todos, setTodos, setEditTodo }) => {
  const handleDelete = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };

  const handleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
  };

  const handleEdit = (index) => {
    const newTodos = [...todos];
    const findTodo = newTodos[index]
    setEditTodo(findTodo);
  }

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button className="complete-btn" onClick={() => handleComplete(index)}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={() => handleDelete(index)}>
        <i className="fas fa-trash"></i>
      </button>
      <button className="edit-btn" onClick={() => handleEdit(index)}>
        <i className="fas fa-pen"></i>
      </button>
    </div>
  );
};

export default Todo;
