import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import Works from './components/Works'; 
import About from './components/About';
import ForFun from './components/ForFun';
import WhereInTheWorld from './components/selected-works/WhereInTheWorld';
import WeatherApp from './components/selected-works/WeatherApp';
import Archive from './components/selected-works/Archive';
import CodyPortfolio from './components/selected-works/CodyPortfolio';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className='App'>
        <Routes>
          <Route path='/work' element={<Works />} />
          <Route path='/where-in-the-world' element={<WhereInTheWorld />} />
          <Route path='/weather-app' element={<WeatherApp />} />
          <Route path='/archive' element={<Archive />} />
          <Route path='/cody-portfolio' element={<CodyPortfolio />} />
          <Route path='/about' element={<About />} />
          <Route path='/for-fun' element={<ForFun />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;