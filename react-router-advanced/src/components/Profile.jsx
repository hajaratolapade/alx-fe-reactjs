import { Routes, Route, useParams, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails"; // ✅ Import ProfileDetails
import ProfileSettings from "./ProfileSettings"; // ✅ Import ProfileSettings

function Profile() {
  const { username } = useParams(); // Get dynamic username from URL

  return (
    <div>
      <h2>Profile Page</h2>
      <p>Welcome, {username}!</p>

      {/* Navigation for nested routes */}
      <nav>
        <ul>
          <li><Link to="details">Profile Details</Link></li>
          <li><Link to="settings">Profile Settings</Link></li>
        </ul>
      </nav>

      {/* Nested Routes */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default Profile;