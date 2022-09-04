import React, { useState } from 'react';


const Products= [
  { productID: 1, productName: 'Milk', productPrice: 1.89 },
  {productID: 2, productName: 'Bread', productPrice: 1.59 },
  {productID: 3, productName: 'Apple Juice', productPrice: 1.89 },
  {productID: 4, productName: 'Orange Juice', productPrice: 1.79 },
  {productID: 5, productName: 'Jam', productPrice: 1.59 },
  {productID: 6, productName: 'Frosted Flakes', productPrice: 2.59 },
  {productID: 7, productName: 'Cornflakes', productPrice: 3.59 },
  {productID: 8, productName: 'Digestives', productPrice: 1.79 },

];

function ProductList() {
  
  const [productName, setProductName] = useState('');

  const [foundProducts, setFoundProducts] = useState(Products);

  const filter = (event) => {
    const keyword = event.target.value;

    if (keyword !== '') {
      const results = Products.filter((product) => {
        return product.productName.toLowerCase().includes(keyword.toLowerCase()    // if search word is part of product name it will be returned
      )});
      setFoundProducts(results);
    } else {
      setFoundProducts(Products);
      
    }

    setProductName(keyword);
  };

  return (
    <div className="container">

      <h2>Product List</h2>
      <input
        type="search"
        value={productName}
        onChange={filter}
        className="input"
        placeholder="Filter by Product Name"
      />
      
      <div className="product-list">
        {foundProducts && foundProducts.length > 0 ? (
          foundProducts.map((product) => (
            <li key={product.productID} className="product">

      {product.productID}  |  {product.productName}  |  £{product.productPrice}

              {/* <span className="product-id">{product.productID} | </span>
              <span className="product-name">{product.productName} | </span>
              <span className="product-price">£{product.productPrice} </span> */}
            </li>
          ))
        ) : (
          <h1>No product found!</h1>
        )}
      </div>
    </div>
  );
}

export default ProductList;