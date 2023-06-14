import React from 'react';
import ReactDOM from 'react-dom/client';
import About from 'pages/About';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <About />
    </BrowserRouter>
  </React.StrictMode>
);

