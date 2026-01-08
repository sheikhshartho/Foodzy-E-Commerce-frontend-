import React from "react";
import StarIcon from "../Icon/StarIcon";
import CardButtonIcon from "../Icon/CardButtonIcon";
import { useNavigate } from "react-router";

const DisplayProducts = (product) => {
  const navigate = useNavigate();
  const { id, title, thumbnail, brand, rating, price, availability_status } =
    product.product;

  const handleClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div
      onClick={() => handleClick(id)}
      className="p-8 rounded-lg border border-[#E9E9E9] "
    >
      <div className="w-74 h-64 overflow-hidden">
        <img className="w-full h-full object-cover" src={thumbnail} alt="" />
      </div>
      <div className="flex flex-col min-h-50 ">
        <p className="font-normal text-[#ADADAD] text-[12px] mt-1 ">{brand}</p>
        <h2 className=" grow font-bold text-xl text-[#253D4E] mt-2 ">
          {" "}
          {title}{" "}
        </h2>
        <div className="flex items-center gap-1 mt-2 ">
          <StarIcon />
          <p className="font-normal text-[14px] text-[#B6B6B6] ">({rating})</p>
        </div>
        <p className="font-medium text-[14px] text-[#3BB77E] mt-2 ">
          {availability_status}
        </p>
        <div className="flex justify-between mt-5">
          <p className="font-bold text-5 text-[#3BB77E]"> ${price}</p>
          <button className="bg-[#F53E32] flex items-center gap-1 text-[14px] text-white font-bold px-4 py-2 rounded-lg cursor-pointer ">
            <CardButtonIcon />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayProducts;
