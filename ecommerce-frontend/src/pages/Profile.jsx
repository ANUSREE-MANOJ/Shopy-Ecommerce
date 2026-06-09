import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6">
          My Profile
        </h1>

        <div className="space-y-4">

          <div>
            <p className="text-gray-500">
              Name
            </p>
            <h2 className="text-lg font-semibold">
              {user.name}
            </h2>
          </div>

          <div>
            <p className="text-gray-500">
              Email
            </p>
            <h2 className="text-lg font-semibold">
              {user.email}
            </h2>
          </div>

          <div>
            <p className="text-gray-500">
              Role
            </p>
            <h2 className="text-lg font-semibold capitalize">
              {user.role}
            </h2>
          </div>

        </div>

        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Profile;