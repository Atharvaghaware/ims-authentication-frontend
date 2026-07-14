import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, GraduationCap } from "lucide-react";
import api from "../api/axios";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await api.post("/login", login);

    localStorage.setItem("token", response.data.token);
    localStorage.setItem("fullName", response.data.fullName);
    localStorage.setItem("role", response.data.role);

    navigate("/dashboard");

  } catch (error) {
    alert(
      error.response?.data?.message ||
      error.response?.data ||
      "Invalid Email or Password"
    );
  }
};
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-blue-600 to-cyan-500 flex items-center justify-center px-6">

      <div className="grid lg:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-full">

        {/* Left Section */}

        <div className="hidden lg:flex flex-col justify-center bg-indigo-700 text-white p-14">

          <GraduationCap size={70} />

          <h1 className="text-5xl font-bold mt-6">
            IMS Portal
          </h1>

          <p className="mt-6 text-lg leading-8 text-indigo-100">
            Manage students, admissions, attendance,
            fees and reports from one powerful dashboard.
          </p>

          <div className="mt-12 space-y-4">

            <div>✔ Student Management</div>

            <div>✔ Attendance Tracking</div>

            <div>✔ Fee Management</div>

            <div>✔ Reports & Analytics</div>

          </div>

        </div>

        {/* Right Section */}

        <div className="p-10 md:p-14">

          <h2 className="text-4xl font-bold text-gray-800">
            Welcome Back
          </h2>

          <p className="text-gray-500 mt-2">
            Sign in to continue
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
          >

            {/* Email */}

            <div className="relative">

              <Mail
                size={20}
                className="absolute left-4 top-4 text-gray-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={login.email}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-600 outline-none"
              />

            </div>

            {/* Password */}

            <div className="relative">

              <Lock
                size={20}
                className="absolute left-4 top-4 text-gray-400"
              />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={login.password}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-12 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-600 outline-none"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-4"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>

            {/* Forgot */}

            <div className="text-right">

              <Link
                to="/forgot-password"
                className="text-indigo-600 hover:underline"
              >
                Forgot Password?
              </Link>

            </div>

            {/* Button */}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition"
            >
              Sign In
            </button>

          </form>

          <div className="text-center mt-8">

            <span className="text-gray-500">
              Don't have an account?
            </span>

            <Link
              to="/register"
              className="text-indigo-600 ml-2 font-semibold hover:underline"
            >
              Register
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;