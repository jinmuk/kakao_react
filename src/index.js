import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

window.Kakao.init('ab9cef7956c124f70fef80d8c0c327cc');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
