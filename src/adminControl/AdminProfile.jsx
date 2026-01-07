import React from 'react';
import AddProducts from "./AddProducts";
import UsersProfile from "../UsersCompo/UsersProfile";
import Users from "./users";

const AdminProfile = () => {
    return (
        <div>
            <UsersProfile />
            <Users/>
            <AddProducts/>
        </div>
    );
};

export default AdminProfile;