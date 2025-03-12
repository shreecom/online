import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../redux/cartSlice';
import './cart.css';
const Cart = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.cartItem);

  return (
    <>
     <div className='heading'> <h3>Shopping Cart</h3> 
     <hr></hr>
     </div>

      <div className='shoppingCartContainer'>

        {cartItem.length === 0 ? <p>cart is empty</p> : null}
        <div className='cartDetails'>
          {cartItem.map((item) => (
            <table>
              <tr>
                <td>
                  <div key={item.id}>
                    <img src={item.image} alt={item.title} height={100} width={100} />
                  </div>
                </td>

  
                <td className='data'><h5>{item.title}</h5></td>
                <td>${item.price}</td>
                <td><button onClick={() => dispatch(removeFromCart(item.id))} className='removeBtn'>Remove</button>
                </td>
                     </tr>
             
              
               
            </table>
          ))}
        </div>
      </div>

    </>
  )
}

export default Cart
