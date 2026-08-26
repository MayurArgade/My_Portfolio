import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './styles/cursor.css';

// Custom animated cursor
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

// ✅ Unified move handler for both mouse & touch
const moveCursor = (e) => {
  const x = e.clientX || e.touches?.[0]?.clientX;
  const y = e.clientY || e.touches?.[0]?.clientY;
  if (x && y) {
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
  }
};
// ✅ Add both event listeners
document.addEventListener('mousemove', moveCursor);
document.addEventListener('touchmove', moveCursor);

// ✅ Add optional scale effect on touch
document.addEventListener('touchstart', () => {
  cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
});
document.addEventListener('touchend', () => {
  cursor.style.transform = 'translate(-50%, -50%) scale(1)';
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);