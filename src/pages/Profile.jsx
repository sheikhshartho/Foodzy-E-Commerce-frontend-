import React, { useEffect, useState } from "react";
import AdminProfile from "../adminControl/AdminProfile";
import Customar from "../UsersCompo/Customar";

const Profile = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      setTimeout(() => {
        setIsAdmin(user?.role === "admin");
      }, 0);
    }
  }, []);

  return (
    <div className="max-w-360 mx-auto my-8">
      {isAdmin ? <AdminProfile /> : <Customar />}
    </div>
  );
};

export default Profile;
