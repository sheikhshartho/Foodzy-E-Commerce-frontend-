import { useDispatch, useSelector } from "react-redux";
import logouticon from "../../public/logout.png";
import { logout } from "../features/login/login";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const LogoutModal = ({ setShowModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  
  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black opacity-50 " />

        {/* Modal */}
        <div className="relative bg-white rounded-lg shadow-xl px-4 py-6">
          <div className="p-6 flex items-center gap-4">
            <div>
              <img className="w-15 h-15" src={logouticon} alt="" />
            </div>
            <h1 className="font-bold text-xl">
              Are you sure you want to log out?
            </h1>
          </div>

          <div className="flex justify-center gap-4 pb-6">
            <button
              onClick={() => setShowModal(false)}
              className="px-6 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleLogout}
              className="px-6 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 transition cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
