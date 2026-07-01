import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";

function Register() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        password: "",
        role: "ADMIN"
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await api.post("/register", form);

            alert(response.data);

            navigate("/");

        } catch (error) {

            console.error("Registration Error:", error);

            alert("Registration Failed");

        }

    };

    return (

        <div className="container mt-5">

            <div className="card p-4 col-md-6 mx-auto">

                <h2 className="text-center mb-4">
                    Register
                </h2>

                <form onSubmit={handleSubmit}>

                    <input
                        className="form-control mb-3"
                        placeholder="Full Name"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                    />

                    <input
                        className="form-control mb-3"
                        placeholder="Email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        className="form-control mb-3"
                        placeholder="Password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                    />

                    <select
                        className="form-control mb-3"
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                    >
                        <option value="ADMIN">ADMIN</option>
                        <option value="SALES">SALES</option>
                    </select>

                    <button
                        type="submit"
                        className="btn btn-primary w-100">

                        Register

                    </button>

                </form>

                <div className="text-center mt-3">

                    <Link to="/">
                        Already have an account?
                    </Link>

                </div>

            </div>

        </div>

    );

}

export default Register;