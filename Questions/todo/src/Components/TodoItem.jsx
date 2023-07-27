import '../App.css';


function TodoItem({ todo, toggleTodo, deleteTodo }) {
  function sendId() {
    toggleTodo(todo.id);
  }

  return (
    <div className="todo-item" data-testid="todo-item">
      {/* Add title,status of todo in p tags and TOGGLE, DELETE in buttons */}
      <p>{todo.title}</p>
      <p className="todo-item-status" style={{
        color:todo.status?"green":"blue",
        fontSize:"20px",
        fontWeight:"600"

      }}>
        {todo.status ? "Completed" : "Not Completed"}
      </p>
      
      <button className="todo-item-button toggle" onClick={sendId}>
        TOGGLE
      </button>
      <button className="todo-item-button delete" onClick={() => deleteTodo(todo.id)}>
        DELETE
      </button>
     
    </div>
  );
}

export default TodoItem;
