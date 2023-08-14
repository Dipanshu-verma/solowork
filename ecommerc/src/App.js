import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Header/Navbar';
import Home from './Components/Screens/homescreen/Home';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './Components/Screens/ProductDetails';
import ProductScreen from './Components/Screens/productscreen/ProductScreen';

 function Layout(){
  return(
    <>
     <Navbar/>
     <Home/>
    </>
  )
}

 


function App() {
  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/productdetail/:id' element={<ProductDetails/>}/>
      <Route path='/Products' element={<ProductScreen/>} />
      <Route/>
      <Route/>
    </Routes>
   
    {/* <div className="App">
    
    </div> */}
    </>
  );
}

export default App;
