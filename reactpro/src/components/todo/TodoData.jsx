const TodoData = (props) => {
  const {todoList, setTodoList } = props;
  const handleDelete = (id) => {
    setTodoList([...todoList].filter(item => item.id !== id));
  }
  return (
    <div className="todo-data">

      {todoList.map((item) => (
        <div className="todo-item" key={item.id}>
          <div>{item.name}</div>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}

    </div>
  )
}

export default TodoData