import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <section className='header-container'>
      <div className='header-body'>
        <Link to='/' className='header-name header-link'>
          Connor Gilbert
        </Link>
        <div className='header-links'>
          <Link to='/work' className='header-link'>
            Work
          </Link>
          <Link to='/about' className='header-link'>
            About Me
          </Link>
          <Link to='/for-fun' className='header-link'>
            For Fun
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Header;