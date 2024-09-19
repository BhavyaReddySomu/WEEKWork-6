
import React from 'react';

function UserProfile({ name, age, location='Unknown' }) {
  return (
    <div className="card">
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
}

export default UserProfile;
