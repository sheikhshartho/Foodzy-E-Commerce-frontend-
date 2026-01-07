import { useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../../public/Group.svg";
import { useSelector } from "react-redux";
const Register = () => {
  const { loading} = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost/root-project/Backend/auth/user.php",
        formData
      );
      if (res.data.success === true) {
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md bg-white p-8 rounded-lg  border border-[#E9E9E9]">
        <div className="flex items-center gap-0 justify-center mb-6">
          <div className="w-15 h-15">
            <img src={Logo} className="mx-auto h-full w-full  " />
          </div>

          <h2 className="text-2xl font-bold text-center  text-black">
            Create Account
          </h2>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Enter your name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className=" border border-[#E9E9E9] text-black mt-1 w-full px-4 py-2  rounded-md focus:outline-none  "
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className=" border border-[#E9E9E9] text-black mt-1 w-full px-4 py-2  rounded-md focus:outline-none  "
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className=" border border-[#E9E9E9] text-black mt-1 w-full px-4 py-2  rounded-md focus:outline-none  "
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-[#F53E32] text-white py-2 rounded-md hover:bg-[#f03023] transition"
          >
            {loading ? (
              <span className="loading loading-dots loading-sm"></span>
            ) : (
              "Register"
            )}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <NavLink
            to={"/login"}
            className="text-[#F53E32] font-bold cursor-pointer hover:underline"
          >
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
