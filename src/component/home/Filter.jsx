import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './filter.css';

const Filter = () => {
  const product = useSelector((state) => state.products.products) ; // Ensure data exists
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(product); // Set initial data when products are available
  }, [product]);

  const filterProduct = (cat) => {
    if (cat === "all") {
      setFilteredProducts(product);
    } else {
      const filteredList = product.filter((x) => x.category === cat);
      setFilteredProducts(filteredList);
    }
  };

  return (
    <div>
      
      <div className="filterOption">
      {/* Filter Buttons */}
      <button onClick={() => filterProduct("all")} className="option">All</button>
      <button onClick={() => filterProduct("men's clothing")} className="option" >Men's Clothing</button>
      <button onClick={() => filterProduct("women's clothing")} className="option">Women's Clothing</button>
      <button onClick={() => filterProduct("electronics")} className="option">Electronics</button>
      <button onClick={() => filterProduct("jewelery")} className="option">Jewelry</button>
      </div>

      {/* Display Filtered Products */}
      <div  className="filterBox">

        {filteredProducts.map((p) => (
          <div className='card_info'>
          <div key={p.id} >
            <img src={p.image} alt={p.title}/>

            <div className='product_detail'>
            <h4>{p.title.substring(0,12)}</h4>
            <p>Category: {p.category}</p>
            <h5>Price: ${p.price}</h5>
            <Link to={`/product/${p.id}`} className='buyBtn'>Buy Now</Link>
          </div>
          </div>
          
        </div>))}
      </div>
    </div>
  );
};

export default Filter;
