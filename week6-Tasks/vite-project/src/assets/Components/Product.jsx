
import React from 'react';

function Product({ name, price, description }) {
  return (
    <div className="product">
      <h2>{name}</h2>
      <p>Price: ${price.toFixed(2)}</p>
      <p>{description}</p>
    </div>
  );
}

export default Product;
