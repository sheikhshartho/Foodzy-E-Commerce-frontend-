import { useState } from "react";
import { useSelector } from "react-redux";
import LogoutModal from "../Modals/LogoutModal";

const UsersProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const { user } = useSelector((state) => state.auth);
  console.log(user);

  return (
    <div className="max-w-360 mx-auto mt-8">
      {showModal && <LogoutModal setShowModal={setShowModal} />}
      <h1 className="text-3xl font-bold mb-4">Your profile info</h1>
      <div className="flex gap-3 py-5">
        <div className=" p-8 rounded-lg border border-[#E9E9E9] w-full">
          <h2 className="text-2xl font-bold mb-4">Order History</h2>
          <p>No orders found.</p>
        </div>
        <div className="flex justify-between items-end  p-8 rounded-lg border border-[#E9E9E9] w-full">
          <div>
            <h2 className="text-2xl font-bold mb-4">Name: {user?.name}</h2>
            <p className="text-sm text-[#777777] font-medium ">
              Email: {user?.email}{" "}
            </p>
            <p className="text-sm text-[#777777]"> Created {user?.created} </p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className=" bg-[#F53E32] text-white p-2 rounded cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersProfile;
