import { useNavigate } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();

    const fullName = localStorage.getItem("fullName");
    const role = localStorage.getItem("role");

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("fullName");
        localStorage.removeItem("role");

        navigate("/login");

    };

    return (

        <div className="container mt-5">

            <div className="card p-5">

                <h1>Welcome</h1>

                <h2>{fullName}</h2>

                <h3>{role}</h3>

                <button
                    className="btn btn-danger mt-3"
                    onClick={logout}>

                    Logout

                </button>

            </div>

        </div>

    );

}

export default Dashboard;