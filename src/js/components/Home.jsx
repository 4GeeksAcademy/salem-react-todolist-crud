import { useState, useEffect } from "react";
import Tasks from "./Tasks.jsx";
import User from "./User.jsx";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("salem");

  // Load tasks when component mounts or name changes
  useEffect(() => {
    fetch(`https://playground.4geeks.com/todo/users/${name}`)
      .then((response) => response.json())
      .then((data) => setTodos(data.todos));
  }, [name]);

  // Function to add a todo
  const addTodo = () => {
    if (todos.length >= 5) {
      alert(
        "Maximum 5 tasks allowed!! subscribe to get more! only $5 million / month"
      );
      return;
    }
    fetch(`https://playground.4geeks.com/todo/todos/${name}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ label: inputValue.trim(), is_done: false }),
    }).then(() => {
      setInputValue("");
      // Refetch todos instead of reload
      fetch(`https://playground.4geeks.com/todo/users/${name}`)
        .then((response) => response.json())
        .then((data) => setTodos(data.todos));
    });
  };

  // Function to remove a todo
  const removeTodo = (index) => {
    const todo = todos[index];

    fetch(`https://playground.4geeks.com/todo/todos/${todo.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      // Refetch todos instead of reload
      fetch(`https://playground.4geeks.com/todo/users/${name}`)
        .then((response) => response.json())
        .then((data) => setTodos(data.todos));
    });
  };

  return (
    <>
      <User
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        name={name}
        setName={setName}
      />
      <Tasks
        todos={todos}
        addTodo={addTodo}
        removeTodo={removeTodo}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </>
  );
};

export default Home;
