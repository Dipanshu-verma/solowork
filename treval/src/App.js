 
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Main from './Component/Main/Main';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
 
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <Main/>
     <Footer/>
     
    </div>
  );
}

export default App;