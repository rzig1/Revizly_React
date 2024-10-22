import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  return (
    <div className='header'>
      <h1>
        <Link to="/">Revizly</Link>
      </h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/exams">Exams</Link></li>
        <li><Link to="/todo">Todo</Link></li>
        <li><Link to="/notes">Notes</Link></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="register">
        <Link to="/register">Sign in, Log in</Link>
        <button id="muteButton" onClick={() => toggleMute()}>
          <img src={assets.iconmusic} alt="music-icon" id="musicIcon" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
