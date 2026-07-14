import { LogOut, UserCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const fullName = localStorage.getItem("fullName");
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Navbar */}
      <nav className="bg-indigo-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

          <h1 className="text-2xl font-bold text-white">
            IMS Dashboard
          </h1>

          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white flex items-center gap-2"
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>
      </nav>

      {/* Content */}
      <div className="flex justify-center mt-16">

        <div className="bg-white rounded-2xl shadow-xl p-10 w-[450px]">

          <div className="flex flex-col items-center">

            <UserCircle
              size={90}
              className="text-indigo-600"
            />

            <h2 className="text-3xl font-bold mt-5">
              Welcome
            </h2>

            <p className="text-gray-500 mt-2">
              Login Successful
            </p>

          </div>

          <div className="mt-10 space-y-5">

            <div className="bg-slate-100 rounded-xl p-5">

              <p className="text-gray-500">
                Full Name
              </p>

              <h3 className="text-xl font-semibold">
                {fullName}
              </h3>

            </div>

            <div className="bg-slate-100 rounded-xl p-5">

              <p className="text-gray-500">
                Role
              </p>

              <h3 className="text-xl font-semibold">
                {role}
              </h3>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;