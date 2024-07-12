import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

import Register from './Components/Register.jsx';
import Login from './Components/Login.jsx';
import Schedule from './Components/Schedule.jsx';
import AboutPage from './Components/AboutPage.jsx';
import GalleryPage from './Components/GalleryPage.jsx';
import ServicePage from './Components/ServicePage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/GalleryPage" element={<GalleryPage />} />
        <Route path="/ServicePage" element={<ServicePage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/" element={<App />} />
        <Route path="/Schedule" element={<Schedule />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);