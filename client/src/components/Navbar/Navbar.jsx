import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
const Navbar = () => {
  return (
    <div className='header'>
       <h1> <a href="index.html">Revizly </a></h1>
          <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="exams.html">Exams</a></li>
              <li><a href="to do.html">Todo </a></li>
              <li><a href="note.html">Notes</a></li>
              <li><a href="#contact">Contact</a></li>
          </ul>
          <div class="register">
              <a href="register.html">Sign in, Log in</a>
              <button id="muteButton" onclick="toggleMute()">
                <img src={assets.iconmusic} alt="music-icon" id="musicIcon" />
              </button>
      
        </div>
     </div>
  )
}

export default Navbar

