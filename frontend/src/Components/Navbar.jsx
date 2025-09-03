import React, { useState } from 'react'

const Navbar = ({ currentLanguage, onLanguageChange, navLinks }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const selectLanguage = (langCode) => {
    onLanguageChange(langCode)
    setIsDropdownOpen(false)
  }

  return (
    <div className="navbar">
      <div className="navbar-inner container-7xl">
        <div className="navbar-left">
          <a href="#home" className="navbar-logo" aria-label="Home">
            <img src="https://storage.123fakturera.se/public/icons/diamond.png" alt="Logo" />
          </a>
        </div>

        <div className="navbar-right">
          <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
            {navLinks.map((link, index) => (
              <a key={index} href={link.href}>{link.label}</a>
            ))}
          </div>

          <div className="navbar-language-selector">
            <button onClick={toggleDropdown} className="language-button" aria-haspopup="menu" aria-expanded={isDropdownOpen}>
              <span>{currentLanguage === 'en' ? 'English' : 'Swedish'}</span>
              <img 
                src={`https://storage.123fakturere.no/public/flags/${currentLanguage === 'en' ? 'GB' : 'SE'}.png`} 
                alt={`${currentLanguage} Flag`} 
              />
            </button>
            {isDropdownOpen && (
              <div className="language-dropdown" role="menu">
                <button onClick={() => selectLanguage('en')} role="menuitem">
                  <span>English</span>
                  <img className='flag-icon' src="https://storage.123fakturere.no/public/flags/GB.png" alt="English Flag" />
                </button>
                <button onClick={() => selectLanguage('sv')} role="menuitem">
                  <span>Swedish</span>
                  <img  className='flag-icon' src="https://storage.123fakturere.no/public/flags/SE.png" alt="Swedish Flag" />
                </button>
              </div>
            )}
          </div>

          <div className="hamburger-menu" onClick={toggleMenu} aria-label="Open Menu">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar