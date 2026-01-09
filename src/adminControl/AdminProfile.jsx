import React from 'react';
import AddProducts from "./AddProducts";
import UsersProfile from "../UsersCompo/UsersProfile";
import Users from "./users";
import Products from "./Products";
import Order from "./Order";

const AdminProfile = () => {
    return (
        <div >
            <UsersProfile />
            <Order/>
            <Products/>
            <Users/>
            <AddProducts/>
        </div>
    );
};

export default AdminProfile;