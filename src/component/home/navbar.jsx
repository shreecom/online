import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './product.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { FiFilter } from 'react-icons/fi';
import { FaBars } from "react-icons/fa";


function Navbar() {
  const [isopen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isopen);
  }
  const cartItem = useSelector((state) => state.cart.cartItem);
  return (
    <>
      <div className='nav'>
      {/* menu button */}
      <div className='icon' onClick={toggleMenu}>  
          <FaBars />
        </div>
    <div><h2>Fation Market</h2> </div>
      
        <div className={isopen ? "linkBar active" : "linkBar"}>
        
          {/* <NavLink to='/' className='companyName'> Fation Market</NavLink> */}
          <NavLink to='/' className='linkname'>Home</NavLink>
          <NavLink to='/product' className='linkname'>Product</NavLink>
          <NavLink to='/about' className='linkname'> About</NavLink>
          <NavLink to='/contact' className='linkname'>Contact</NavLink>
        </div>

        <div className='navbarBtn'>
          <NavLink to='/cart' className='btn'>
            <ShoppingCartIcon />  <span className=''>  {cartItem.length} </span></NavLink>

          <NavLink to='/filter' className='btn'> <FiFilter /> </NavLink>
        </div>
        
      </div>

    </>
  )
}

export default Navbar
