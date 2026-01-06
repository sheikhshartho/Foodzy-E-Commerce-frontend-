import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/login/login";
import Logo from "../../public/Group.svg";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.auth);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(loginData));
  };

    useEffect(() => {
      if (user) {
        navigate("/profile");
      }
    }, [user, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md bg-white p-8 rounded-lg border border-[#E9E9E9]">
        <div className="flex items-center justify-center mb-6">
          <img src={Logo} className="h-12" />
          <h2 className="text-2xl font-bold text-black ml-2">
            Login to Your Account
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              name="email"
              type="text"
              onChange={handleChange}
              placeholder="Enter email"
              className=" border border-[#E9E9E9] text-black mt-1 w-full px-4 py-2  rounded-md focus:outline-none  "
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              name="password"
              type="password"
              onChange={handleChange}
              placeholder="Enter password"
              className=" border border-[#E9E9E9] text-black mt-1 w-full px-4 py-2  rounded-md focus:outline-none  "
            />
            {error && <p className="text-red-500 text-sm ">{error}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#F53E32] text-white py-2 rounded"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Don’t have an account?{" "}
          <NavLink to="/register" className="text-[#F53E32] font-bold">
            Register here
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
