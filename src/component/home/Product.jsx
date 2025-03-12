import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/productSlice';
import { Link } from 'react-router-dom';
import './product.css';
import { GiSkeleton } from 'react-icons/gi';


const Product = () => {
  const dispatch = useDispatch();
  const [loading,setLoading]=useState(false);
  const { products, status } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
    setLoading(false);
  }, [dispatch]);

  // if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Failed to load products.</p>;

  const Loading =()=>{
    return(
      <>
      <div height={300} color='grey'>
    <GiSkeleton/>
       </div>
     </>
     
    )
     }
     const ShowProduct=()=>{
      return(<>
          <div className='box'>
        {
          products.map((product) => (
            <div className='card_info'>
              <div key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} alt='{product.title}' height={200} width={200}></img>
                </Link>
                <div className='product_detail'>
                  <h5> {product.title.substring(0, 12)}</h5>
                  <p>${product.price}</p>
                  <Link to={`/product/${product.id}`} className='buyBtn'>Buy Now</Link>
                </div>

              </div>
            </div>
          ))
        }
      </div>
      </>)
     }
  return (
    <div className='product_panel'>
      <h1> Latest Products</h1>
      <hr></hr>
      
      <div height={300} width={300}>
        {loading ? <Loading/> : <ShowProduct/>}
      </div>
    </div>
  )
}

export default Product;
