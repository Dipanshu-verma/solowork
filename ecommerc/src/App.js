import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Header/Navbar';
import Home from './Components/Screens/homescreen/Home';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
    </div>
  );
}

export default App;
