import React from 'react';
import Footer from './Footer';
import Header from './Header';
import UserCard from './UserCard';
import Content from './Content';
import Layout from './Layout';
import Greeting from './Greeting';
import Button from './Button';
import Counter from './Counter';
import DateTime from './DateTime';
import Welcome from './Welcome';
import UserProfile from './UserProfile';

function App() {
  // Array of names
  const names = ['Honey', 'Bhavya', 'Sruthi', 'Nandu', 'Kavya'];

  const handleButtonClick = (name) => {
    alert(`Button clicked for ${name}`);
  };

  
  const contact = {
    email: 'xyz@gmail.com',
    phone: '1234567891',
    address: 'kn road , RML street, kdp',
  };

  const products = ['Watermelon', 'Strawberry', 'Banana', 'Papaya', 'Mangoes'];

  return (
    <div>
      <Header />

      <main style={{ padding: '10px' }}>
        <Greeting />
        <Content />
        <h1 style={{ color: 'pink' }}>Welcome to React!</h1>
        <div>
          React is a JavaScript library for building user interfaces.
        </div>
        <h1>List of Names:</h1>
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>

        {/* Render the Profile component with props */}
        <Profile name="Bhavya" age={19} />
        <Profile name="Sruthi" age={21} />
        
        {/* Render UserCard components */}
        <UserCard name="Kavya" location="Vijaywada" />
        <UserCard name="Sruthi" location="Guntur" />

       {/* Render the Counter component */}
        <Counter />

        {/* Render the DateTime component */}
        <DateTime />

        {/* Render the Welcome component three times with different names */}
        <Welcome name="Bhavya" />
        <Welcome name="Kavya" />
        <Welcome name="Poojitha" />

        {/* Render the UserProfile component */}
        <UserProfile name="Sruthi" age={21} location="Guntur" />
        <UserProfile name="Madhuri" age={25} location="Nellore" />
        <UserProfile name="Honey" age={19} location="Kadapa" />

        
      </main>

      <Footer />
    </div>
  );
}

export default App;