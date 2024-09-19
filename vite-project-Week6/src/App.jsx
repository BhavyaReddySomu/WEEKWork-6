import React from 'react';

// Product component
  function Product = ({ name, price, description }) => {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h2>{name}</h2>
      <p>Price: ${price.toFixed(2)}</p>
      <p>{description}</p>
    </div>
  );
};

// App component
const App = () => {
  const products = [
    { name: 'Product 1', price: 29.59, description: 'This is a great product.' },
    { name: 'Product 2', price: 19.89, description: 'This product is even better.' },
    { name: 'Product 3', price: 39.79, description: 'You will love this product!' },
  ];

  return (
    <div>
      <h1>Product List</h1>
      {products.map((product, index) => (
        <Product
          key={index}
          name={product.name}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
};


