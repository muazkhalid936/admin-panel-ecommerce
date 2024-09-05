import React, { useEffect, useState } from "react";
import "./ListProduct.css";
const ListProduct = () => {
  const [allProduct, setAllProduct] = useState([]);
  const fetchInfo = async () => {
    await fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProduct(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <div className="list-product">
      <h1>All Product List</h1>

      <div className="list-format">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="list-all-product">
        <hr />

        {allProduct.map((product, index) => {
          return (
            <div key={index} className="list-main">
              {product.name}
              <img src={product.image} />
              <div className="prices">
                <div>
                  <p>Old Prices</p>
                  <p>{product.old_price}</p>
                </div>
                <div>
                  <p>New Prices</p>
                  <p>{product.new_price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
