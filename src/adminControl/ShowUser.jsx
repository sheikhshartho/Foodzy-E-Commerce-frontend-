import { useDispatch } from "react-redux";
import { deleteUser, updateUser } from "../features/login/login";

const ShowUser = ({ user }) => {
  const dispatch = useDispatch();

  const isAdmin = user?.role_ENUM === "admin";

  const hanldleDelet = () => {
    dispatch(deleteUser(user.id));
  };

  const handleRoleUpdate = () => {
    dispatch(
      updateUser({
        id: user.id,
        role: isAdmin ? "customer" : "admin",
      })
    );
  };

  return (
    <div className="flex items-end justify-between p-8 rounded-lg border border-[#E9E9E9] my-4  ">
      <div>
        <h1 className="font-bold text-xl mb-2">
          Name: {user?.name}
          <span
            className={` ml-3 font-semibold py-1 ftext-white px-4 rounded-2xl  text-sm ${
              isAdmin ? "bg-[#03fc0f3d]" : "bg-[#007bff3a]"
            } `}
          >
            {user?.role_ENUM}
          </span>{" "}
        </h1>
        <h1 className="text-sm text-[#777777] font-medium ">
          Email: {user?.email}{" "}
        </h1>
        <p className="text-sm text-[#777777] font-medium">
          {" "}
          Created: {user?.created_at}{" "}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={handleRoleUpdate}
          className={`text-sm p-2 text-white  rounded-md  cursor-pointer ${
            isAdmin ? "bg-[#03a00b]" : "bg-[#007bff]"
          } `}
        >
          {isAdmin ? "Remove admin" : "Make admin"}
        </button>
        <button
          onClick={hanldleDelet}
          className=" bg-[#F53E32] w-25 text-white text-sm  p-2 rounded cursor-pointer"
        >
          Delete user
        </button>
      </div>
    </div>
  );
};

export default ShowUser;
