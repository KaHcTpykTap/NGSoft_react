import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing Components
import React, { useState, useEffect } from "react";
import Header from './components/header/Header';
import TableTasks from './components/table/TableTasks';
import AddTask from './components/addTask/AddTask';

function App() {

  const [todos, setTodos] = useState([]);
  const [statusAdd, setStatusAdd] = useState(false);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    saveLocalTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos]);

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  // Saving in LocalStorage
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodos);
    }
  };

  return (
    <div className="App">
      <Header todos={todos} />
      {statusAdd ?
        <AddTask
          setStatusAdd={setStatusAdd}
          todos={todos}
          setTodos={setTodos} />
        :
        <TableTasks
          todos={todos}
          setTodos={setTodos}
          setStatusAdd={setStatusAdd}
        />}
    </div>
  );
}

export default App;
