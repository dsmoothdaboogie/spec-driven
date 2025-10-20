import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function App() {
  return (
    <main style={{ fontFamily: 'system-ui', padding: 16 }}>
      <h1>Web Postman</h1>
      <nav style={{ marginBottom: 12 }}>
        <Link to="/">Builder</Link> | <Link to="/collections">Collections</Link>
      </nav>
      <Outlet />
    </main>
  );
}
