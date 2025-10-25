import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import logo from "./assets/react.svg";
import { useState } from "react";
function App() {
  const [todoList, setTodoList] = useState([]);


  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name
    };
    setTodoList([...todoList, newTodo]);
  }

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  return (
    <div className="todo-container">
      <div className="todo-title">
        Todo List
      </div>
      <TodoNew
        addNewTodo={addNewTodo}
      />

      {todoList.length > 0 ? <TodoData
        todoList={todoList} setTodoList = {setTodoList}
      /> : <div className="todo-image">
        <img src={logo} alt="logo" className="logo" />
      </div>}
    </div>
  )
}

export default App
