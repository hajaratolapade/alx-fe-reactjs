import React from "react";
import PropTypes from "prop-types";

const UserProfile = ({ name, age, bio }) => {
  return (
    <div>
      <h2>{Alice}</h2>
      <p>Age: {25}</p>
      <p>Bio: {loves hiking and photography}</p>
    </div>
  );
};

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  bio: PropTypes.string.isRequired,
};

export default UserProfile;
