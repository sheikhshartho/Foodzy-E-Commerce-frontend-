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

  const publishedProducts = products.filter(
    (product) => product.postType === "Publish"
  );

  return (
    <div className="grid grid-cols-4 gap-4 max-w-360 mx-auto my-10  ">
      {publishedProducts.map((product) => (
        <DisplayProducts key={product.id} product={product} />
      ))}
    </div>
  );
};

export default GetProducts;
