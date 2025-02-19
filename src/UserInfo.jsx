import React from 'react';

function UserInfo({ userData }) {
  return (
    <div>
      <h1>{userData.name}</h1>
      <p>{userData.email}</p>
    </div>
  );
}

export default UserInfo;