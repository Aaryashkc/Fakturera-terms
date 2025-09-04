import React, { useState, useLayoutEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Terms from './Pages/Terms';
import Navbar from './Components/Navbar';

const useViewportHeight = () => {
  useLayoutEffect(() => {
    const setVh = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);
};


const App = () => {
  useViewportHeight();

  // Your existing state and logic
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const navLinks = {
    en: [
      { label: 'Home', href: '#home' },
      { label: 'Order', href: '#order' },
      { label: 'Our Customers', href: '#customers' },
      { label: 'About us', href: '#about' },
      { label: 'Contact Us', href: '#contact' },
    ],
    sv: [
      { label: 'Hem', href: '#home' },
      { label: 'Beställning', href: '#order' },
      { label: 'Våra kunder', href: '#customers' },
      { label: 'Om oss', href: '#about' },
      { label: 'Kontakta oss', href: '#contact' },
    ],
  };

  const handleLanguageChange = (langCode) => {
    setCurrentLanguage(langCode);
  };

  return (
    <>
      <div className="app">
        <Navbar onLanguageChange={handleLanguageChange} currentLanguage={currentLanguage} navLinks={navLinks[currentLanguage]} />
        <Routes>
          <Route path="/" element={<Terms language={currentLanguage} />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </>
  );
};

export default App;

