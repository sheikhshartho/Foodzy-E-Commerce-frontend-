import React from "react";
import { useDispatch } from "react-redux";
import { deleteOrder, updateOrderStatus } from "../features/products/order";

const ShowOrders = (order) => {
  const dispatch = useDispatch();
  const {
    customer_name,
    customer_address,
    customer_phone,
    total_price,
    order_status,
    thumbnail,
    product_name,
    order_id,
  } = order.order;

  const isComfram = order_status === "completed";

  const hanldleDelet = () => {
    dispatch(deleteOrder(order_id));
  };

  const handleConfirm = () => {
    dispatch(updateOrderStatus({ id: order_id, status: "completed" }));
  };


  return (
    <div className="p-8 rounded-lg border border-[#E9E9E9] mt-4 flex justify-between items-end ">
      <div className="flex items-center gap-2">
        <div className="w-35 h-35 overflow-hidden mb-4">
          <img className="w-full h-full object-cover" src={thumbnail} alt="" />
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">
            Product Name: {product_name}
            <span
              className={` ml-3 font-semibold py-1 ftext-white px-4 rounded-2xl  text-sm ${
                isComfram ? "bg-[#03fc0f3d]" : "bg-[#007bff3a]"
              } `}
            >
              {order_status}
            </span>
          </h3>

          <h1 className="font-medium text-lg mb-1 text-gray-600 ">
            Order by: <span className="text-black">{customer_name}</span>
          </h1>

          <h3 className="font-medium text-lg mb-1 text-gray-600 ">
            Total Price: <span className="text-red-500"> ${total_price}</span>
          </h3>
          <p className="font-medium text-sm mb-1 text-gray-600 ">
            Customer Address:{" "}
            <span className="text-black">{customer_address}</span>
          </p>
          <p className="font-medium text-sm mb-1 text-gray-600 ">
            Customer phone: <span className="text-black">{customer_phone}</span>{" "}
          </p>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <button
          onClick={handleConfirm}
          className={`text-sm p-2 text-white  rounded-md  cursor-pointer ${
            isComfram ? "bg-[#03a00b]" : "bg-[#007bff]"
          } `}
        >
          {isComfram ? "Completed" : "Confirm Order"}
        </button>
        <button
          onClick={hanldleDelet}
          className=" bg-[#F53E32] w-25 text-white text-sm  p-2 rounded cursor-pointer"
        >
          {isComfram ? "Delete" : "Cancel"}
        </button>
      </div>
    </div>
  );
};

export default ShowOrders;
