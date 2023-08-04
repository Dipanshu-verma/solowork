import './App.css';
import { Routes,Route, useNavigate } from 'react-router-dom';
import Navbar from './header/Navbar';
import Home from './Component/Home';
import Product from './Component/Product';
import Cart from './Component/Cart';
import { useEffect } from 'react';

function App() {
   
 

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/product' element={  <Product/>  } />
        <Route path='/cart' element={ <Cart/>} />
      </Routes>
    </>
  );
}

export default App;
