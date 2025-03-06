import { useParams } from "react-router-dom";

function ProfileDetails() {
  const { username } = useParams(); // Get username from the URL

  return (
    <div>
      <h3>Profile Details</h3>
      <p>Here are the details for {username}:</p>
      <ul>
        <li>Email: {username}@example.com</li>
        <li>Joined: January 2024</li>
        <li>Role: User</li>
      </ul>
    </div>
  );
}

export default ProfileDetails;