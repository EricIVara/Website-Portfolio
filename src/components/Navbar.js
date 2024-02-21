// src/components/Navbar/Navbar.js
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-items-left">
        <a href="#about">About Me</a>
        <a href="#contact">Contact</a>
        <a href="#resume">Resume</a>
        <a href="#blog">Blog</a>
        <a href="#portfolio">Portfolio</a>
      </div>
      <h1 className="nav-title">Eric's Website Portfolio</h1>
      <div className="nav-items-right">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      </div>
    </nav>
  );
};

export default Navbar;