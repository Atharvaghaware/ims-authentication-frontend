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

            <div className="card shadow p-5">

                <h1 className="text-success">
                    Welcome
                </h1>

                <hr />

                <h4>Name : {fullName}</h4>

                <h5>Role : {role}</h5>

                <button
                    className="btn btn-danger mt-4"
                    onClick={logout}
                >
                    Logout
                </button>

            </div>

        </div>

    );

}

export default Dashboard;