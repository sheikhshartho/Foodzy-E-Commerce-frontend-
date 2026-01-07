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
      <div className="flex items-center justify-between p-8 bg-[#fafafa] rounded-2xl mt-4">
        <h1 className="text-2xl font-bold mb-4">See all user</h1>
        <button
          onClick={() => setShowUser(!showUser)}
          className=" bg-[#F53E32] text-white p-2 rounded"
        >
          {showUser ? "Hide user" : "Show user"}
        </button>
      </div>
      {showUser && users.map((user) => <ShowUser key={user.id} user={user} />)}
    </div>
  );
};

export default Users;
