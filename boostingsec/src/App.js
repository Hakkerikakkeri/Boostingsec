import React, { useState, useEffect } from 'react';
import './App.css';

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
          <a href="Comingsoon" className='review'>Review (coming soon)</a>
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
      </footer>
    </div>
  );
}

export default App;
