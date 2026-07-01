import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";

function ForgotPassword() {

    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await api.post("/forgot-password", {
                email: email
            });

            alert(response.data);

        } catch (error) {

            console.log(error);

            alert("Unable to process request");

        }

    };

    return (

        <div className="container mt-5">

            <div className="card p-4 col-md-6 mx-auto">

                <h2 className="text-center mb-4">
                    Forgot Password
                </h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="email"
                        className="form-control mb-3"
                        placeholder="Enter your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <button
                        className="btn btn-warning w-100">

                        Send Reset Link

                    </button>

                </form>

                <div className="text-center mt-3">

                    <Link to="/">
                        Back to Login
                    </Link>

                </div>

            </div>

        </div>

    );

}

export default ForgotPassword;