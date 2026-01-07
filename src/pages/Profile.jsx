import AdminProfile from "../adminControl/AdminProfile";
import Customar from "../UsersCompo/Customar";

const Profile = () => {
  return (
    <div className="max-w-360 mx-auto mt-8">
      <div className="border " >
        <h1 className="text-center text-2xl font-bold mt-10">
          Tis is customer porfile
        </h1>
        <Customar />
      </div>

      <div className="border mt-10" >
        <h1 className="text-center text-2xl font-bold mt-10">
          this is admin profile
        </h1>
        <AdminProfile />
      </div>
    </div>
  );
};

export default Profile;
