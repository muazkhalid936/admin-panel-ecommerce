import React from "react";
import "./AddProduct.css";
import { BsCloudUpload } from "react-icons/bs";

const AddProduct = () => {
  return (
    <div className="Addproduct">
      <div>
        <p>Product Title</p>
        <input type="text" name="name" placeholder="Enter Name"></input>
      </div>
      <div>
        <p>Price</p>
        <input
          type="number"
          name="old_price"
          placeholder="Actual Price"
        ></input>
      </div>
      <div>
        {" "}
        <p>Offer</p>
        <input
          type="number"
          name="new_price"
          placeholder="Discounted Price"
        ></input>
      </div>
      <div>
        <p>Product Categoru</p>
        <select name="category" className="category">
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>
      </div>

      <div className="item-field">
        <label htmlFor="file-input">
          <BsCloudUpload />
        </label>
        <input type="file" name="image" id="file-input" hidden />
      </div>
      <div>
        <button>Add Product</button>
      </div>
    </div>
  );
};

export default AddProduct;
