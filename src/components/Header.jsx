import React from "react";
import User from "../Icon/User";
import { Links, NavLink } from "react-router";
import Logo from "../../public/Group.svg";
import ShoppingCart from "../Icon/ShoppingCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

  const { user } = useSelector((state) => state.auth);

  return (
    <div className="flex justify-between items-center p-5 border-b border-gray-300 ">
      <Link to={"/"} className="flex items-center gap-1">
        <div className="w-20 h-20">
          <img src={Logo} className="mx-auto h-full w-full  " />
        </div>
        <div>
          <h1 className="font-bold text-4xl text-black">Foodzy</h1>
          <p> A Treasure of Tastes</p>
        </div>
      </Link>
      <nav>
        <ul className="flex items-center gap-4">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>Produvt</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <Link
          to={user ? "/profile" : "/login"}
          className="flex items-center gap- cursor-pointer"
        >
          <User />
          <h1>Account</h1>
        </Link>
        <Link to={'/card'} className="flex items-center gap- cursor-pointer">
          <ShoppingCart />
          <h1>Cart</h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
