import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Header/Navbar';
import Home from './Components/Screens/homescreen/Home';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './Components/Screens/ProductDetails';
import ProductScreen from './Components/Screens/productscreen/ProductScreen';
import CartScreen from './Components/Screens/cartscreen/CartScreen';
import footer  from './footerpart.png'
import Login from './Components/login/Login';
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
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Login/>} />
      <Route path='/productdetail/:id' element={<ProductDetails/>}/>
      <Route path='/Products' element={<ProductScreen/>} />
      <Route path='/cartpage' element={<CartScreen/>} />
      <Route/>
      <Route/>
    </Routes>  
    <img src={footer} alt="" />  
   
    {/* <div className="App">
    
    </div>*/}
    </>
  );
}

export default App;
