
import React from 'react';

function Layout() {
  return (
    <div className="container">
      <header>
        <h1>Header</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section>
        <h2>Main Content</h2>
        <p>This is some sample content.</p>
      </section>
      <footer>
        <p>&copy; 2024 My Website</p>
      </footer>
    </div>
  );
}

export default Layout;
