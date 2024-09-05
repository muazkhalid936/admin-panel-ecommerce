import React, { useState } from "react";
import "./AddProduct.css";
import { BsCloudUpload } from "react-icons/bs";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProductDetails({
      ...productDetails,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    console.log("Product Details:", productDetails);

    try {
      let formData = new FormData();
      formData.append("product", image);

      const uploadResponse = await fetch("http://localhost:4000/upload", {
        method: "POST",
        body: formData,
      });

      const uploadResult = await uploadResponse.json();

      if (uploadResult.success === 1) {
        console.log("Image uploaded successfully:", uploadResult.image_url);

        const productPayload = {
          name: productDetails.name,
          image: uploadResult.image_url,
          category: productDetails.category,
          new_price: productDetails.new_price,
          old_price: productDetails.old_price,
        };

        const productResponse = await fetch(
          "http://localhost:4000/addproduct",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(productPayload),
          }
        );

        const productResult = await productResponse.json();

        if (productResult.success) {
          console.log("Product added successfully:", productResult.name);
          // Handle success (e.g., show a success message or reset the form)
        } else {
          console.error("Error adding product:", productResult);
          // Handle error
        }
      } else {
        console.error("Image upload failed:", uploadResult);
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <div className="Addproduct">
      <div>
        <p>Product Title</p>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={productDetails.name}
          onChange={changeHandler}
        />
      </div>
      <div className="prices">
        <div className="price-input">
          <p>Price</p>
          <input
            type="number"
            name="old_price"
            placeholder="Actual Price"
            value={productDetails.old_price}
            onChange={changeHandler}
          />
        </div>
        <div className="price-input">
          <p>Offer</p>
          <input
            type="number"
            name="new_price"
            placeholder="Discounted Price"
            value={productDetails.new_price}
            onChange={changeHandler}
          />
        </div>
      </div>
      <div>
        <p>Product Category</p>
        <select
          name="category"
          className="category"
          value={productDetails.category}
          onChange={changeHandler}
        >
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>
      </div>

      <div className="item-field">
        <label htmlFor="file-input">
          <p>Upload image</p>
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt="uploaded"
              className="upload-image"
            />
          ) : (
            <BsCloudUpload className="upload-image" />
          )}
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>
      <div>
        <button className="add-btn" onClick={handleSubmit}>
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
