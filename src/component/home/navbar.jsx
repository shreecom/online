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
        <h2>Fation Market</h2>
        <div className={isopen ? "linkBar active" : "linkBar"}>
          {/* <NavLink to='/' className='companyName'> Fation Market</NavLink> */}
          <NavLink to='/' className='linkname'>Home</NavLink>
          <NavLink to='/product' className='linkname'>Product</NavLink>
          <NavLink to='/about' className='linkname'> About</NavLink>
          <NavLink to='/contact' className='linkname'>Contact</NavLink>
        </div>
        <div className='navbarBtn'>
          <NavLink to='/cart' className='btn'>
            <ShoppingCartIcon></ShoppingCartIcon>  Cart  {cartItem.length}</NavLink>

          <NavLink to='/filter' className='btn'> <FiFilter />  Filter</NavLink>
        </div>
        <div className='icon' onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>

    </>
  )
}

export default Navbar
