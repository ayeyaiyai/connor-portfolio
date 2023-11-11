import React, { useEffect, useState } from 'react';
import './App.css';
import handIcon from './images/hand-left-outline.svg';
import Header from './components/Header';

function App() {
  const [isWhiteTextVisible, setIsWhiteTextVisible] = useState(false);
  const [isBlackTextVisible, setIsBlackTextVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const darkSection = document.querySelector('.dark-section');
      const scrollY = window.scrollY;

      const opacity = Math.min(1, scrollY / 300);
      darkSection.style.opacity = `${opacity}`;

      if (opacity > 0) {
        setIsBlackTextVisible(false);
      } else {
        setIsBlackTextVisible(true);
      }
      
      if (opacity === 1) {
        setIsWhiteTextVisible(true);
      } else {
        setIsWhiteTextVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleUnload = () => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.onbeforeunload = handleUnload;

    return () => {
      window.onbeforeunload = null;
    };
  }, []);

  return (
    <div className='container'>
      <Header />
      <div className='light-section'>
        <div className={`top-text ${!isBlackTextVisible ? 'invisible' : ''}`}>
          <span className='top-text-body'>Hi, I'm Connor.</span>
          <img src={handIcon} alt='hand icon' className='hand-icon' />
        </div>
      </div>
      <div className='dark-section'>
        <div className={`bottom-text ${isWhiteTextVisible ? 'visible' : ''}`}>
          <span className='bottom-text-body'>I am a front end developer.</span>
          <span className='bottom-text-body second-sequence'>Specializing in react.</span>
          <span className='bottom-text-body third-sequence'>Check me out!</span>
        </div>
      </div>
    </div>
  );
}

export default App;