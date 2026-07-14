import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import protectedRoute from "./components/ProtectRoute";

function App() {
    return (
        <Routes>

            {/* Default Route */}
            <Route path="/" element={<Navigate to="/login" replace />} />

            {/* Authentication */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
           <Route
  path="/dashboard"
  element={
    
      <Dashboard />
  }
/>
            {/* Invalid Route */}
            <Route path="*" element={<Navigate to="/login" replace />} />

        </Routes>
    );
}

export default App;