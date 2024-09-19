
import React from 'react';

function DateTime() {
  const date = new Date();
  const formattedDate = date.toLocaleString();

  return (
    <div>
      <h1>Current Date and Time:</h1>
      <p>{formattedDate}</p>
    </div>
  );
}

export default DateTime;
