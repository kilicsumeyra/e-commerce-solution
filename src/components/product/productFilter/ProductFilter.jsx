import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './ProductFilter.css';

const ProductFilter = () => {
  const [category, setCategory] = useState('All');
  const [brand, setBrand] = useState('All');
  const [price, setPrice] = useState(3000);
  const { products } = useSelector((state) => state.product);

  const allCategories = ['All', ...new Set(products.map((product) => product.category))];
  const allBrands = ['All', ...new Set(products.map((product) => product.brand))];

  const clearFilters = () => {
    setCategory('All');
    setBrand('All');
  };

  return (
    <div className='filter-aside'>
      <h4>Categories</h4>
      <div className='category'>
        {allCategories.map((cat, index) => {
          return (
            <button key={index} type='button' className={category === cat ? 'active-filter' : ''}>
              &#8250; {cat}
            </button>
          );
        })}
      </div>
      <h4>Brand</h4>
      <div className='brand'>
        <select value={brand} onChange={(e) => setBrand(e.target.value)}>
          {allBrands.map((brand, index) => {
            return (
              <option key={index} value={brand}>
                {brand}
              </option>
            );
          })}
        </select>
        <h4>Price</h4>
        <p>{`$${price}`}</p>
        <div className='price'>
          <input type='range' value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <br />
        <button className='--btn --btn-danger' onClick={clearFilters}>
          Clear Filter
        </button>
      </div>
    </div>
  );
};

export default ProductFilter;
