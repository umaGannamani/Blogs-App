import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h2>BlogsApp</h2>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/posts">Posts</Link></li>
      <li><Link to="/posts/new">Add Post</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;
