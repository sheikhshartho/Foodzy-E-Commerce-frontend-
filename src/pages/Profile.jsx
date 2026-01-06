import { useState } from "react";
import { useSelector } from "react-redux";
import LogoutModal from "../Modals/LogoutModal";

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="max-w-360 mx-auto mt-8 ">
      {showModal && <LogoutModal setShowModal={setShowModal} />}
      <h1 className="text-3xl font-bold mb-4">Your profile info</h1>
      <div className="flex gap-3 py-5">
        <div className=" p-8 rounded-lg border border-[#E9E9E9] w-full">
          <h2 className="text-2xl font-bold mt-8 mb-4">Order History</h2>
          <p>No orders found.</p>
        </div>
        <div className="flex justify-between items-end  p-8 rounded-lg border border-[#E9E9E9] w-full">
          <div>
            <p>Name: {user?.name}</p>
            <p>Email: {user?.email} </p>
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

export default Profile;
