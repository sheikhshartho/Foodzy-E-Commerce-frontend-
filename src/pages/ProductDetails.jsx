import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import StarIcon from "../Icon/StarIcon";
import OrderNowIcon from "../Icon/OrderNowIcon";

import CheckoutModal from "../Modals/CheckoutModal";

const ProductDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost/root-project/Backend/products/?id=${id}`
        );
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  const {
    rating,
    brand,
    shipping_information,
    warranty_information,
    thumbnail,
    title,
    description,
    availability_status,
    return_policy,
    category,
    price,
  } = product;

  const details = [
    { label: "Category", value: category },
    { label: "Brand", value: brand },
    { label: "Warranty", value: warranty_information },
    { label: "Shipping", value: shipping_information },
    { label: "Availability", value: availability_status },
    { label: "Return policy", value: return_policy },
  ];

  return (
    <div className="max-w-360 mx-auto ">
      {showModal && (
        <CheckoutModal product={product} setShowModal={setShowModal} />
      )}
      <div className="flex items-center gap-3 ">
        <div className="w-[40%] overflow-hidden">
          <img className="w-full h-full object-cover" src={thumbnail} alt="" />
        </div>
        <div className="w-[60%]">
          <h1 className="font-normal text-[30px] mb-4">{title}</h1>
          <p className="font-normal text-[14px] text-[#7A7A7A] mb-4 ">
            {description}
          </p>
          <hr className="border-t border-[#777777] opacity-50 mb-6 " />

          <div className="flex items-center gap-2 mb-4">
            <StarIcon />
            <p className="font-normal text-[15px] text-[#7A7A7A]  ">
              ( {rating} Review )
            </p>
          </div>
          <div className="mb-4">
            {details.map((item, index) => (
              <div key={index} className="flex gap-3  ">
                <span className="min-w-27.5 font-medium text-gray-800">
                  {item.label}
                </span>
                <span className="font-medium">:</span>
                <span className="text-gray-600">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-3xl text-[#F53E32]">${price}</h1>
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#F53E32] flex items-center gap-1 text-[14px] text-white font-bold px-4 py-2 rounded-lg cursor-pointer "
            >
              <OrderNowIcon />
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
