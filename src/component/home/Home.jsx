import React from 'react'
import Product from './Product';

function Home() {
  return (
    <div className='HomePanel'>
      <div className='Homescreen'>
      <img src="/assets/home.jpg" width='100%' height={500} alt='not found'></img>
      </div>
        <div className='tagline'>
          <h1>The Best Quality Product</h1>
        </div>
      <Product/>
    </div>
  )
}

export default Home;
