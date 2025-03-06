import { useParams } from "react-router-dom";

function Profile() {
  const { username } = useParams(); // Get dynamic username from URL

  return (
    <div>
      <h2>Profile Page</h2>
      <p>Welcome, {username}!</p>
    </div>
  );
}

export default Profile;
