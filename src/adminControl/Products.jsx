import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showProducts } from "../features/products/products";
import ShowProducts from "./ShowProducts";

const Products = () => {
  const [showUser, setShowUser] = useState(false);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(showProducts());
  }, [dispatch]);

  return (
    <div className="">
      <div className="flex items-center justify-between p-8 rounded-lg border border-[#E9E9E9] mt-4">
        <h1 className="text-2xl font-bold mb-4">See all Products</h1>
        <button
          onClick={() => setShowUser(!showUser)}
          className=" bg-[#F53E32] text-white p-2 rounded cursor-pointer "
        >
          {showUser ? "Hide products" : "Show products"}
        </button>
      </div>
      {showUser &&
        products.map((product) => (
          <ShowProducts key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Products;
