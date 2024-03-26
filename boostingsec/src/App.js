import React, { useState, useEffect } from 'react';
import './App.css';
import { Color } from 'three';

function App() {

  const maps = [
    { name: 'Mirage', stats: '13:2' },
    { name: 'Dust II', stats: '13:4' },
    { name: 'Inferno', stats: '13:0' },
    { name: 'Overpass', stats: '13:1' }
  ];

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <header className={`Header ${isSticky ? 'glassmorphism' : ''}`}>
        <div className='Header-content'>
          <div className='Logos'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7199ea" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hexagon"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
            <p className='Logo'>BoostingSec</p>
          </div>
          <div className='Header-right'>
            <a>Contact us</a>
            <a href="https://discord.gg/Aj2uRTsmMS" className='Header-button'>Discord</a>
          </div>
        </div>
      </header>
      <section className='section-one'>
        <div className='text-box'>
          <p className='title content'>Elevate your game, conquer with ease CS2 Boosting</p>
          <p className='punchline content'>Where victory's a breeze!</p>
        </div>
        <p className='undertext'>Swift, dependable, and simply superb: Our service is the epitome of CS2 mastery, served with flair!</p>
        <div className='introduce'>
          <a href="https://discord.gg/Aj2uRTsmMS" className='discord'>Discord</a>
          <a href="Comingsoon" className='review'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3"/></svg> Review</a>
        </div>
      </section>
      <section className='section-two'>
        <div className='recent-box'>
          <p className='title-md'>Recent games</p>
          <p className='info'>Enhance your gaming experience effortlessly and instantly! We're here to ensure your boost is fast and seamless. Utilizing innovative methods, we deliver your desired results in no time. Ready for victory? Seize the opportunity and elevate your game to new heights!</p>
        </div>
        <div className='recent-games'>
          {maps.map((map, index) => (
            <div className='games' key={index}>
              <p>{map.name}</p>
              <p className='stats'>{map.stats}</p>
            </div>
          ))}
        </div>
      </section>
      <p className='cut-title'>Why Choose Us</p>
      <section className='section-three'>
          <div className='info-box'>
            <div className='info-title'>
            <div className='delivery'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f4d090" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
            </div> 
              <p style={{color: "#f4d090"}}>Fast Delivery</p>
            </div>
            <div>
            <p className='info-text'>Fast and automated system</p>
            </div>
          </div>
          <div className='info-box'>
            <div className='info-title'>
            <div className='support'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f84982" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div> 
              <p style={{color: "#f84982"}}>24/7 Customer Support</p>
            </div>
            <div>
            <p className='info-text'>Active support and fast response!</p>
            </div>
          </div>
          <div className='info-box'>
            <div className='info-title'>
            <div className='security'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#007bff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
            </div>
              <p style={{color: "#007bff"}}>Secure & Confidential</p>
            </div>
            <div>
            <p className='info-text'>handled with the utmost security!</p>
            </div>
          </div>
      </section>
      <footer className="footer">
        <div className="footer-content">
          <div className='Logos'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7199ea" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hexagon">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            </svg>
            <p className='Logo'>BoostingSec</p>
          </div>
          <div className="footer-info">
            <a className='linkdisc' href="https://discord.gg/Aj2uRTsmMS">Join discord</a>
            <p>&copy; 2024 BoostingSec. All rights reserved.</p>
          </div>
        </div>
        <div className='blub'>

        </div>
      </footer>
    </div>
  );
}

export default App;
