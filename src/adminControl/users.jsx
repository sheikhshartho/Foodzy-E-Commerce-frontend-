import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUsers } from "../features/login/login";
import ShowUser from "./ShowUser";

const Users = () => {
  const [showUser, setShowUser] = useState(false);
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(showUsers());
  }, [dispatch]);

  return (
    <div className="">
      <div className="flex items-center justify-between p-8 rounded-lg border border-[#E9E9E9] mt-4">
        <h1 className="text-2xl font-bold mb-4">See all users</h1>
        <button
          onClick={() => setShowUser(!showUser)}
          className=" w-30.25  bg-[#F53E32] text-white p-2 rounded cursor-pointer "
        >
          {showUser ? "Hide user" : "Show user"}
        </button>
      </div>
      {showUser && users.map((user) => <ShowUser key={user.id} user={user} />)}
    </div>
  );
};

export default Users;
