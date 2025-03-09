import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import emailjs from '@emailjs/browser';
const emailJsPublicKey = 'lOBsgnsSWQsd4qpS7';
emailjs.init({
  publicKey: emailJsPublicKey,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
