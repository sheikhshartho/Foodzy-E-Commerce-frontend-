import { useDispatch } from "react-redux";
import { deleteProduct, updateProduct } from "../features/products/products";
const ShowProducts = ({ product }) => {
  const isPublish = product?.postType == "Publish";
  const dispatch = useDispatch();

  const hanldleDelet = () => {
    dispatch(deleteProduct(product.id));
  };

const handlePostTypeUpdate = () => {
  dispatch(
    updateProduct({
      id: product.id,
      postType: isPublish ? "Unpublish" : "Publish",
    })
  );
};

  return (
    <div className="flex justify-between items-end p-8 rounded-lg border border-[#E9E9E9] mt-4 ">
      <div className="flex items-center gap-2">
        <div
          className="w-30 h-30 overflow-hidden
"
        >
          <img
            className="w-full h-full object-cover"
            src={product?.thumbnail}
            alt=""
          />
        </div>
        <div className="">
          <h4 className="font-bold text-xl">{product?.title}</h4>
          <h4 className="text-sm text-[#777777] font-medium ">
            {product?.description}
          </h4>
        </div>
      </div>
      <div className="flex items-center gap-2 ">
        <button
          onClick={handlePostTypeUpdate}
          className={`w-25 text-white text-sm  p-2 rounded cursor-pointer  ${
            !isPublish ? "bg-[#007bff]" : "bg-[#03a00b]"
          } `}
        >
          {!isPublish ? "Publish" : "Unpublish"}
        </button>
        <button
          onClick={hanldleDelet}
          className=" bg-[#F53E32] w-25 text-white text-sm  p-2 rounded cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ShowProducts;
