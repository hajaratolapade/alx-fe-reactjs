import { Routes, Route, Link } from "react-router-dom";
import Profile from "./Profile";
import Settings from "./Settings";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="home">Home</Link> | 
        <Link to="profile/johndoe">John Doe's Profile</Link> 
        <Link to="settings">Settings</Link>
      </nav>

      <Routes>
        <Route path="home" element={<DashboardHome />} />
        <Route path="profile/:username" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
