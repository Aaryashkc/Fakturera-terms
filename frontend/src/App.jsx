import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Terms from './Pages/Terms'
import Navbar from './Components/Navbar'
import './index.css'

const App = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en')

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
  }

  const handleLanguageChange = (langCode) => {
    setCurrentLanguage(langCode)
  }

  return (
    <div className="app">
      <Navbar onLanguageChange={handleLanguageChange} currentLanguage={currentLanguage} navLinks={navLinks[currentLanguage]} />
      <Routes>
        <Route path="/" element={<Terms language={currentLanguage} />} />
      </Routes>
    </div>
  )
}

export default App 