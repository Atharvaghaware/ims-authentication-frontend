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

            alert("Login Successful");

            navigate("/dashboard");

        } catch (error) {

            console.error(error);

            alert(
                error.response?.data?.message ||
                error.response?.data ||
                "Invalid Email or Password"
            );

        }

    };

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-5">

                    <div className="card shadow p-4">

                        <h2 className="text-center mb-4">
                            Login
                        </h2>

                        <form onSubmit={handleSubmit}>

                            <input
                                type="email"
                                className="form-control mb-3"
                                placeholder="Email"
                                name="email"
                                value={login.email}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="password"
                                className="form-control mb-3"
                                placeholder="Password"
                                name="password"
                                value={login.password}
                                onChange={handleChange}
                                required
                            />

                            <button
                                type="submit"
                                className="btn btn-success w-100"
                            >
                                Login
                            </button>

                        </form>

                        <div className="text-center mt-3">

                            <Link to="/forgot-password">
                                Forgot Password?
                            </Link>

                        </div>

                        <div className="text-center mt-2">

                            <Link to="/register">
                                Create New Account
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Login;