import React from 'react'
// import Product from './Product';
import './product.css';
import Filter from './Filter';
function Home() {
  return (
    <div className='HomePanel'>
      <div className='Homescreen'>
      <img src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg" width='100%' height={500} alt='imagenotfound'></img>
      </div>
        {/* <div className='tagline'>
          <h1>The Best Quality Product</h1>
        </div> */}
      {/* <Product/> */}
      <Filter/>
    </div>
  )
}

export default Home;
