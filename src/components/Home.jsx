import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import handIcon from '../images/hand-left-outline.svg';
import Header from '../components/Header';

function Home() {
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

    useEffect(() => {
      const scrollToBottom = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      };
  
      const timeoutId = setTimeout(scrollToBottom, 2000);
  
      return () => clearTimeout(timeoutId);
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
            <span className='bottom-text-body'>I'm a front end developer.</span>
            <span className='bottom-text-body second-sequence'>I work primarily with react.</span>
            <span className='bottom-text-body third-sequence'>Welcome to my portfolio :-)</span>
            <div className='bottom-text-body fourth-sequence home-links'>
              <a target="_blank" rel="noopener" href="mailto:connorgilbert77@gmail.com?subject=Hey%20Connor%20-%20Saw%20Your%20Portfolio" className='home-link'>Email</a> | <a target="_blank" rel="noopener" href='https://drive.google.com/file/d/1OZI3lyE0pU8JfYFhNrC_WS27ssrKd8G8/view' className='home-link'>Resume</a> | <a target="_blank" rel="noopener" href='https://www.linkedin.com/in/connor-gilbert-21b3a3268/' className='home-link'>LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;