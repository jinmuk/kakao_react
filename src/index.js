import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

window.Kakao.init(process.env.REACT_APP_JAVASCRIPT_API_KEY);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
