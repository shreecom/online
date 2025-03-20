import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom'
import { addToCart } from '../../redux/cartSlice';
import './product_details.css';
import StarIcon from '@mui/icons-material/Star';

const ProductDetails = () => {
    const {id}=useParams();
    const dispatch =useDispatch();
    const product = useSelector((state)=>state.products.products.find((p)=>p.id === Number(id)));

    if(!product) return <p>Product not found</p>;
  return (
    <div>
        <div className='boxProduct box'>
    
        <img src={product.image} alt={product.title} height={400} width={400}></img>
        
     <div className='productDetails'>
    
     <p>{product.category}</p>
      <h3>{product.title}</h3>
      <h3>${product.price}</h3>
      <h5>Product Details</h5><hr className='hline'></hr>
      <p>{product.description}</p>
        
        <h4>Rating : {product.rating && product.rating.rate} <StarIcon></StarIcon></h4>

      <div className='BtnPanel'>
      <button onClick={()=>dispatch(addToCart(product))} className='addToCartBtn'>Add To Cart</button>

      <NavLink to='/cart' className='cartBtn'>Go To Cart</NavLink>
      </div>
      </div>
    </div>
    </div>

  )
}

export default ProductDetails
