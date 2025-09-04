// Keeps CSS --vh variable in sync with the real viewport height to avoid 100vh bugs on mobile
(function () {
  const setViewportHeightVar = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  // Run on load
  setViewportHeightVar();

  // Update on resize and orientation change
  const opts = { passive: true };
  window.addEventListener('resize', setViewportHeightVar, opts);
  window.addEventListener('orientationchange', setViewportHeightVar, opts);

  // On iOS Safari, focusing inputs and virtual keyboard can cause jumps; schedule a microtask
  // to re-evaluate after the event loop to reduce flashes.
  window.addEventListener('focusin', () => queueMicrotask(setViewportHeightVar), opts);
  window.addEventListener('focusout', () => queueMicrotask(setViewportHeightVar), opts);
})();
