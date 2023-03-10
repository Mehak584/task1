import React, { useState } from "react";

const ProductListing = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 10, inCart: false },
    { id: 2, name: "Product 2", price: 15, inCart: false },
    { id: 3, name: "Product 3", price: 20, inCart: false },
    { id: 4, name: "Product 4", price: 25, inCart: false }
  ]);

  const addToCart = (id) => {
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          return { ...product, inCart: true };
        }
        return product;
      })
    );
  };

  return (
    <div>
      <h2 style={{marginTop: "30px"}}>Product Listing Page</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <button
                  disabled={product.inCart}
                  onClick={() => addToCart(product.id)}
                >
                  Buy
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ProductListing