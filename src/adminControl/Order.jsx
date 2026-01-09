import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showOrders } from "../features/products/order";
import ShowOrders from "./ShowOrders";
const Order = () => {
  const [showOrder, setShowOrder] = useState(false);
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(showOrders());
  }, [dispatch]);

  console.log(orders);
  return (
    <div className="">
      <div className="flex items-center justify-between p-8 rounded-lg border border-[#E9E9E9] mt-4">
        <h1 className="text-2xl font-bold mb-4">See all orders</h1>
        <button
          onClick={() => setShowOrder(!showOrder)}
          className=" w-30.25 bg-[#F53E32] text-white p-2 rounded cursor-pointer "
        >
          {showOrder ? "Hide orders" : "Show orders"}
        </button>
      </div>
      {showOrder &&
        orders.map((order) => (
          <ShowOrders key={order.id} order={order} />
        ))}
    </div>
  );
};

export default Order;

