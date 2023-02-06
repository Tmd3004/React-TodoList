import Todo from "../Todo/Todo";

const TodoList = ({ todos, setTodos, filteredTodos, setEditTodo }) => {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todo, index) => (
            <Todo
              key={todo.id}
              todo={todo}
              index={index}
              text={todo.text}
              todos={todos}
              setTodos={setTodos}
              setEditTodo={setEditTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
