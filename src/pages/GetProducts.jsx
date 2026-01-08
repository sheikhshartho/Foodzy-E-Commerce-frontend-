import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showProducts } from "../features/products/products";
import DisplayProducts from "./DisplayProducts";
const GetProducts = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(showProducts());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-4 gap-4 my-10 max-w-360 mx-auto  ">
      {products.map((product) => (
        <DisplayProducts key={product.id} product={product} />
      ))}
    </div>
  );
};

export default GetProducts;
