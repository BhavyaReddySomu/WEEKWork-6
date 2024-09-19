
import React from 'react'

const Greeting = () => {
    const date = new Date();
    const hours = date.getHours();  
  return (
    <div>
        {hours < 12 ? <p>Good morning!</p> : <p>Good evening!</p>}
    </div>
  );
}

export default Greeting;
