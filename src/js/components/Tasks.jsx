const Tasks = ({ todos, addTodo, removeTodo, inputValue, setInputValue }) => {
  return (
    <div className="container-fluid w-50">
      <h1>todos</h1>
      <div className="list-group textinput">
        <input
          className="list-group-item textinput"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="What needs to be done?"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTodo();
            }
          }}
        />
        <ul className="list-group shadow-sm">
          {todos.map((todo, index) => (
            <li
              key={todo.id || index}
              className="textinput list-group-item d-flex justify-content-between align-items-center todo-item"
            >
              {index + 1}- {todo.label}
              <div className="delete-btn" onClick={() => removeTodo(index)}>
                ×
              </div>
            </li>
          ))}
          <div className="list-group-item">{todos.length} items left</div>
        </ul>
      </div>
    </div>
  );
};

export default Tasks;
