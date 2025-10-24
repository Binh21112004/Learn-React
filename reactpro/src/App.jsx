import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import logo from "./assets/react.svg";
function App() {
  const hoidanit = "eric";
  const age = 25;
  const data = {
    address : "hanoi",
    country : "vietnam"
  }
  return (
    <div className="todo-container">
      <div className="todo-title">
        Todo List
      </div>
      <TodoNew/>
      <TodoData name = {hoidanit} age={age} data = {data}/>
      <div className="todo-image">
        <img src={logo} alt="logo" className="logo"/>
      </div>
    </div>
  )
}

export default App
