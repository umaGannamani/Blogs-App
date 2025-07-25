import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Posts from './components/Posts';
import AddEditPost from './components/AddEditPost';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

const App = () => (
  <Router>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/new" element={<AddEditPost />} />
        <Route path="/edit/:id" element={<AddEditPost />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>
);

export default App;
