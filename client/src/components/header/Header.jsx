import React from 'react';
import './Header.css';
import Navbar from './navbar/Navbar';

function Header() {
  return (
    <div className='header'>
      <h1 className='text-lg'>Header</h1>
        <Navbar/>
    </div>
  )
}

export default Header