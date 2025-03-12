import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/home/navbar';
import Contact from './component/home/Contact';
import Home from './component/home/Home';
import Cart from './component/home/Cart';

import ProductDetails from './component/home/ProductDetails';
import Product from './component/home/Product';
import Filter from './component/home/Filter';


function App() {
  return (
    <div className="App">
       <Navbar/>
       <Routes>
        <Route extact path='/' element={<Home/>}></Route>
       <Route path='/product' element={<Product/>}></Route> 
        <Route path='/product/:id' element={<ProductDetails/>}></Route>
        
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/filter' element={<Filter/>}> </Route>
            </Routes>
    </div>
  );
}

export default App;
