import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendOrder } from "../features/products/order";
import toast, { Toaster } from "react-hot-toast";
const CheckoutModal = ({ product, setShowModal }) => {
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.order);
  const [formData, setFormData] = useState({
    customer_name: "",
    customer_address: "",
    customer_phone: "",
  });

  const {
    brand,
    shipping_information,
    title,
    availability_status,
    return_policy,
    price,
  } = product;

  const details = [
    { label: "Brand", value: brand },
    { label: "Shipping", value: shipping_information },
    { label: "Availability", value: availability_status },
    { label: "Return policy", value: return_policy },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrder = () => {
    const orderData = {
      customer_name: formData.customer_name,
      customer_address: formData.customer_address,
      customer_phone: formData.customer_phone,

      product_name: product.title,
      thumbnail: product.thumbnail,
      total_price: product.price,
      order_status: "pending",
    };

    dispatch(sendOrder(orderData));
    setShowModal(false);
  };
  

  return (
    <div>
      {success && toast.success("Successfully toasted!")}
      <Toaster position="top-right" reverseOrder={false} />
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50 " />

        <div className="relative bg-white rounded-lg shadow-xl p-10 w-[50%]">
          <div className="flex justify-between mb-10 items-start">
            <div>
              <div className="font-bold text-[18px] mb-2 ">
                Product name: {title}
              </div>
              <h1 className="font-bold text-3xl text-[#F53E32] mb-4">
                ${price}
              </h1>
              <h1 className="font-bold text-[18px]">Payment system</h1>
              <h1 className="text-sm">
                Pay only when you receive your product. Cash on Delivery only
              </h1>
            </div>
            <div className="mb-4">
              {details.map((item, index) => (
                <div key={index} className="flex gap-3  my-1">
                  <span className="min-w-27.5 font-medium text-gray-800">
                    {item.label}
                  </span>
                  <span className="font-medium">:</span>
                  <span className="text-gray-600">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              name="customer_name"
              type="text"
              // value={formData.customer_name}
              onChange={handleChange}
              placeholder="Enter Name"
              className=" border border-[#E9E9E9] text-black mt-1 w-full px-4 py-2  rounded-md focus:outline-none  "
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              name="customer_address"
              type="text"
              // value={formData.customer_address}
              onChange={handleChange}
              placeholder="Enter address"
              className=" border border-[#E9E9E9] text-black mt-1 w-full px-4 py-2  rounded-md focus:outline-none  "
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone number
            </label>
            <input
              name="customer_phone"
              // value={formData.customer_phone}
              onChange={handleChange}
              type="text"
              placeholder="Enter address"
              className=" border border-[#E9E9E9] text-black mt-1 w-full px-4 py-2  rounded-md focus:outline-none  "
            />
          </div>
          <button
            onClick={handleOrder}
            className="w-full bg-[#F53E32] text-white py-2 rounded mt-4 cursor-pointer"
          >
            Odder
          </button>
          <button
            onClick={() => setShowModal(false)}
            className="p-2 w-full mt-4 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition cursor-pointer"
          >
            {" "}
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
