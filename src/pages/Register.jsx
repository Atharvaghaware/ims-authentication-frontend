import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  GraduationCap
} from "lucide-react";
import api from "../api/axios";

function Register() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "ADMIN"
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await api.post("/register", form);

      alert(response.data);

      navigate("/login");

    } catch (error) {

      alert(
        error.response?.data ||
        "Registration Failed"
      );

    }

  };

  return (

    <div className=" min-h-screen bg-linear-to-br from-indigo-700 via-blue-600 to-cyan-500 flex items-center justify-center px-6">

      <div className="grid lg:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-full">

        {/* Left */}

        <div className="hidden lg:flex flex-col justify-center bg-indigo-700 text-white p-14">

          <GraduationCap size={70} />

          <h1 className="text-5xl font-bold mt-6">
            Create Account
          </h1>

          <p className="mt-6 text-lg text-indigo-100 leading-8">

            Join the IMS Portal and manage
            students, attendance,
            admissions and reports effortlessly.

          </p>

        </div>

        {/* Right */}

        <div className="p-10 md:p-14">

          <h2 className="text-4xl font-bold text-gray-800">

            Register

          </h2>

          <p className="text-gray-500 mt-2">

            Create your new account

          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >

            {/* Name */}

            <div className="relative">

              <User
                size={20}
                className="absolute left-4 top-4 text-gray-400"
              />

              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={form.fullName}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-600 outline-none"
              />

            </div>

            {/* Email */}

            <div className="relative">

              <Mail
                size={20}
                className="absolute left-4 top-4 text-gray-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
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
                value={form.password}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-12 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-600 outline-none"
              />

              <button
                type="button"
                className="absolute right-4 top-4"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >

                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}

              </button>

            </div>

            {/* Role */}

            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full py-3 px-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-600 outline-none"
            >

              <option value="ADMIN">Admin</option>
              <option value="SALES">Sales</option>

            </select>

            {/* Button */}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition"
            >

              Create Account

            </button>

          </form>

          <div className="text-center mt-8">

            <span className="text-gray-500">

              Already have an account?

            </span>

            <Link
              to="/login"
              className="ml-2 text-indigo-600 font-semibold hover:underline"
            >

              Login

            </Link>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Register;