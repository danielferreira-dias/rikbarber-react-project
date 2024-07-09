import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

import Login from './Components/EnterPage.tsx';
import Register from './Components/Register.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);