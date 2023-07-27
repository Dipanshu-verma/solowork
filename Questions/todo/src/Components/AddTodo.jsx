import { useRef } from "react";
import '../App.css';

function AddTodo({ addTodo }) {
  const todoinput = useRef("");

  function sendInput() {
    addTodo(todoinput.current);
  }

  return (
    <div className="add-todo" data-testid="add-todo">
      {/* Add input tag and a button */}
      <input
        className="add-todo-input"
        type="text"
        placeholder="Add a new Todo"
        onChange={(event) => (todoinput.current = event.target.value)}
      />
      <button className="add-todo-button" onClick={sendInput}>
        ADD TODO
      </button>
    </div>
  );
}

export default AddTodo;
