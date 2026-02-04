import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './store';

const products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Phone', price: 499 },
  { id: 3, name: 'Headphones', price: 199 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id} style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}>
          <span>{product.name} - ${product.price}</span>
          <button onClick={() => dispatch(addItem(product))}> Add to Cart </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;