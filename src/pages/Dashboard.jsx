function Dashboard() {

    const token = localStorage.getItem("token");
const fullName = localStorage.getItem("fullName");
const role = localStorage.getItem("role");

    const logout = () => {

        localStorage.clear();

        window.location.href = "/";

    }

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

    )

}

export default Dashboard;