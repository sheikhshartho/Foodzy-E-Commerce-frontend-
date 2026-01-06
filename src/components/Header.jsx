import React from 'react';
import User from '../Icon/User'
import { NavLink } from "react-router";
import Logo from "../../public/Group.svg";
import ShoppingCart from "../Icon/ShoppingCart";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-between items-center p-5 border-b border-gray-300 ">
      <div className="flex items-center gap-1">
        <div className="w-20 h-20">
          <img src={Logo} className="mx-auto h-full w-full  " />
        </div>
        <div>
          <h1 className="font-bold text-4xl text-black">Foodzy</h1>
          <p> A Treasure of Tastes</p>
        </div>
      </div>
      <nav>
        <ul className="flex items-center gap-4">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Produvt</a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <Link to="/login" className="flex items-center gap- cursor-pointer">
          <User />
          <h1>Account</h1>
        </Link>
        <div className="flex items-center gap- cursor-pointer">
          <ShoppingCart />
          <h1>Cart</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;