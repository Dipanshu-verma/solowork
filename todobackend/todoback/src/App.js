
import './App.css';
import Todos from './Components/Todos';
import TodoForm from './Components/TodoForm';

function App() {
  return (
    <div className="App">
     <h1>Todo App</h1>
     <TodoForm/>
     <Todos/>
    </div>
  );
}

export default App;
