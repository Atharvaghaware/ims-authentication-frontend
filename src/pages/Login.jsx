import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";

function Login() {

    const navigate = useNavigate();

    const [login, setLogin] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        });
    };

   const handleSubmit = async (e) => {

    e.preventDefault();

    try {

        const response = await api.post("/login", login);

        console.log(response.data);

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("fullName", response.data.fullName);
        localStorage.setItem("role", response.data.role);

        navigate("/dashboard");

    } catch (error) {
    const message = error.response?.data || "Login Failed";
    alert(message);
}

}
    return (

        <div className="container mt-5">

            <div className="card p-4 col-md-6 mx-auto">

                <h2 className="text-center mb-4">
                    Login
                </h2>

                <form onSubmit={handleSubmit}>

                    <input
                        className="form-control mb-3"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        className="form-control mb-3"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                    />

                    <button className="btn btn-success w-100">
                        Login
                    </button>

                </form>

                <Link
                    className="mt-3 text-center"
                    to="/register">

                    Create New Account

                </Link>
                <div className="text-center mt-3">

                <Link to="/forgot-password">
                        Forgot Password?
                </Link>

        </div>

         </div>

        </div>

    );

}

export default Login;