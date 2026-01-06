import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostProduct } from "../features/products/products";

// resetState;

const AddProducts = () => {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.product);
  const [productData, setProductData] = useState({
    title: "",
    category: "",
    description: "",
    price: "",
    discount: "",
    rating: "",
    stock: "",
    brand: "",
    thumbnail: "",
    warranty: "",
    shipping: "",
    availability: "",
    returnPolicy: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(PostProduct(productData));
  };

  return (
    <div className="w-full">
      <div className="max-w-360 mx-auto mt-8">
        <div className="flex items-center gap-2  ">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              name="title"
              value={productData.title}
              onChange={handleChange}
              className=" border border-[#E9E9E9] text-black mt-1 w-full p-6  rounded-md focus:outline-none mb-6  "
              type="text"
              placeholder="Add your product title"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <input
              name="category"
              value={productData.category}
              onChange={handleChange}
              className=" border border-[#E9E9E9] text-black mt-1 w-full p-6  rounded-md focus:outline-none mb-6  "
              type="text"
              placeholder="Add your product category"
            />
          </div>
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <input
            name="description"
            value={productData.description}
            onChange={handleChange}
            className=" border border-[#E9E9E9] text-black mt-1 w-full p-6  rounded-md focus:outline-none mb-6  "
            type="text"
            placeholder="Add your product description "
          />
        </div>
        <div className="flex items-center gap-2">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              name="price"
              value={productData.price}
              onChange={handleChange}
              className=" border border-[#E9E9E9] text-black mt-1 w-full p-6 mb-6 rounded-md focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none  "
              type="number"
              placeholder="Add your product price"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              Discount
            </label>
            <input
              name="discount"
              value={productData.discount}
              onChange={handleChange}
              className=" border border-[#E9E9E9] text-black mt-1 w-full p-6 mb-6 rounded-md focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none  "
              type="number"
              placeholder="Add your product discount"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              Rating
            </label>
            <input
              name="rating"
              value={productData.rating}
              onChange={handleChange}
              className=" border border-[#E9E9E9] text-black mt-1 w-full p-6 mb-6 rounded-md focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none  "
              type="number"
              placeholder="Add your product rating"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              Stock
            </label>
            <input
              name="stock"
              value={productData.stock}
              onChange={handleChange}
              className=" border border-[#E9E9E9] text-black mt-1 w-full p-6 mb-6 rounded-md focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none  "
              type="number"
              placeholder="Add your product stock"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              Brand
            </label>
            <input
              name="brand"
              value={productData.brand}
              onChange={handleChange}
              className=" border border-[#E9E9E9] text-black mt-1 w-full p-6  rounded-md focus:outline-none mb-6  "
              type="text"
              placeholder="Add your product brand"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              Thumbnail
            </label>
            <input
              name="thumbnail"
              value={productData.thumbnail}
              onChange={handleChange}
              className=" border border-[#E9E9E9] text-black mt-1 w-full p-6  rounded-md focus:outline-none mb-6  "
              type="text"
              placeholder="Add your product thumbnail"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              Warranty information
            </label>
            <input
              name="warranty"
              value={productData.warranty}
              onChange={handleChange}
              className=" border border-[#E9E9E9] text-black mt-1 w-full p-6  rounded-md focus:outline-none mb-6  "
              type="text"
              placeholder="Add your product warranty information"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              Shipping information
            </label>
            <input
              name="shipping"
              value={productData.shipping}
              onChange={handleChange}
              className=" border border-[#E9E9E9] text-black mt-1 w-full p-6  rounded-md focus:outline-none mb-6  "
              type="text"
              placeholder="Add your product shipping information"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              Availability status
            </label>
            <input
              name="availability"
              value={productData.availability}
              onChange={handleChange}
              className=" border border-[#E9E9E9] text-black mt-1 w-full p-6  rounded-md focus:outline-none mb-6  "
              type="text"
              placeholder="Add your product availability status"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              Return policy
            </label>
            <input
              name="returnPolicy"
              value={productData.returnPolicy}
              onChange={handleChange}
              className=" border border-[#E9E9E9] text-black mt-1 w-full p-6  rounded-md focus:outline-none mb-6  "
              type="text"
              placeholder="Add your product return policy"
            />
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className=" bg-[#F53E32] text-white p-2 rounded cursor-pointer "
        >
          Add product
        </button>
      </div>
    </div>
  );
};

export default AddProducts;
