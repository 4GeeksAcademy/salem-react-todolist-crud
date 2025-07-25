import { useState, useRef } from "react";

//  controlled input useRef

const Home = () => {
  const [todos, setTodos] = useState([]);
  const removeTodo = (index) => {
    const newTodos = todos.filter((predicate, i) => i !== index);
    setTodos(newTodos);
    console.log(
      "removed todo at index: ",
      index,
      " ...todos.length: ",
      newTodos.length
    );
  };
  const todoInputRef = useRef();

  const addTodo = () => {
    const newTodo = todoInputRef.current.value;
    if (newTodo) {
      setTodos([...todos, newTodo]);
      todoInputRef.current.value = "";
      console.log("added todos", todos.length);
    }
  };

  return (
    <div className="container-fluid w-50">
      <h1>todos</h1>
      <div className=" list-group textinput">
        <input
          className="list-group-item textinput"
          type="text"
          ref={todoInputRef}
          placeholder="What needs to be done?"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              addTodo();
            }
          }}
        />
        <ul className="list-group shadow-sm ">
          {todos.map((todo, index) => (
            <li
              key={index}
              className=" textinput list-group-item d-flex justify-content-between align-items-center todo-item"
            >
              {index + 1}- {todo}
              <div className="delete-btn" onClick={() => removeTodo(index)}>
                ×
              </div>
            </li>
          ))}
          <div className="list-group-item    ">{todos.length} items left</div>
          <div className="list-group-item    "></div>
          <div className="list-group-item    "></div>
        </ul>
      </div>
    </div>
  );
};

export default Home;
