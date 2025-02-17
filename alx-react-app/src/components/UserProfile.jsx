import React from "react";
import PropTypes from "prop-types";

const UserProfile = ({ name, age, bio }) => {
  return (
    <div>
      <h2>{name}</h2>  {/* ✅ Now correctly using the prop */}
      <p>Age: {age}</p>  {/* ✅ Using the age prop */}
      <p>Bio: {bio}</p>  {/* ✅ Using the bio prop */}
    </div>
  );
};

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  bio: PropTypes.string.isRequired,
};

export default UserProfile;
