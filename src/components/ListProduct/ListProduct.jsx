import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import { IoIosRemoveCircleOutline } from "react-icons/io";

const ListProduct = () => {
  const [allProduct, setAllProduct] = useState([]);

  // Fetch product information from the backend
  const fetchInfo = async () => {
    await fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProduct(data);
      });
  };

  // Handle product removal
  const deleteHandler = async (id) => {
    await fetch("http://localhost:4000/removeproduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          // Update product list by filtering out the removed product
          setAllProduct((prevProducts) =>
            prevProducts.filter((product) => product.id !== id)
          );
        }
      })
      .catch((error) => console.error("Error:", error));
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
        {allProduct.map((product, index) => (
          <div key={index}>
            <div className="item-format">
              <img
                src={product.image}
                alt={product.name}
                className="item-icon"
              />
              <p>{product.name}</p>
              <p className="old_price">${product.old_price}</p>
              <p className="new_price">${product.new_price}</p>
              <p>{product.category}</p>
              <IoIosRemoveCircleOutline
                onClick={() => deleteHandler(product.id)}
                className="item-remove"
              />
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
