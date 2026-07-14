import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowLeft, GraduationCap } from "lucide-react";
import api from "../api/axios";

function ForgotPassword() {

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const response = await api.post("/forgot-password", {
        email,
      });

      alert(response.data);

      setEmail("");

    } catch (error) {

      alert(
        error.response?.data ||
        "Unable to send reset email."
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen bg-linear-to-br from-indigo-700 via-blue-600 to-cyan-500 flex items-center justify-center px-6">

      <div className="grid lg:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-full">

        {/* Left */}

        <div className="hidden lg:flex flex-col justify-center bg-indigo-700 text-white p-14">

          <GraduationCap size={70} />

          <h1 className="text-5xl font-bold mt-6">
            Forgot Password
          </h1>

          <p className="mt-6 text-lg text-indigo-100 leading-8">

            Enter your registered email.
            We'll send you a password reset link.

          </p>

        </div>

        {/* Right */}

        <div className="p-10 md:p-14">

          <h2 className="text-4xl font-bold text-gray-800">

            Reset Password

          </h2>

          <p className="text-gray-500 mt-2">

            Enter your registered email address.

          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
          >

            <div className="relative">

              <Mail
                size={20}
                className="absolute left-4 top-4 text-gray-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-600 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition disabled:opacity-60"
            >

              {loading ? "Sending..." : "Send Reset Link"}

            </button>

          </form>

          <div className="mt-8 text-center">

            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium"
            >

              <ArrowLeft size={18} />

              Back to Login

            </Link>

          </div>

        </div>

      </div>

    </div>

  );

}

export default ForgotPassword;