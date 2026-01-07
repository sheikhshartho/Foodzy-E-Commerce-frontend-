import React from 'react';
import AddProducts from "./AddProducts";
import UsersProfile from "../UsersCompo/UsersProfile";
import Users from "./users";
import Products from "./Products";

const AdminProfile = () => {
    return (
        <div>
            <UsersProfile />
            <Products/>
            <Users/>
            <AddProducts/>
        </div>
    );
};

export default AdminProfile;