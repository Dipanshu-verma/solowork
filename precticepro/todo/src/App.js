import logo from './logo.svg';
import './App.css';
import Todos from './component/Todos';
import Addtodo from './component/Addtodo';
import "tailwindcss/tailwind.css";
function App() {
  return (
    <div className="App">
  <h1 className="text-5xl cursor-pointer">todoapp</h1>
      <Todos/>
    </div>
  );
}

export default App;
