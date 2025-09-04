import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";

// Set --vh custom property to handle mobile browser UI chrome changing viewport height
const setViewportHeightVar = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

setViewportHeightVar();
window.addEventListener('resize', setViewportHeightVar, { passive: true });
window.addEventListener('orientationchange', setViewportHeightVar, { passive: true });

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>

)
