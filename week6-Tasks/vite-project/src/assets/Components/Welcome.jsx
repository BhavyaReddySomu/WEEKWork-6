
import React from 'react';

function Welcome(props) {
  const { name } = props; // Destructure the name prop

  return (
    <div>
      <h2>Hello everyone, {name}!</h2>
    </div>
  );
}

export default Welcome;
