import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

import Register from './Components/Register.jsx';
import Login from './Components/Login.jsx';
import Schedule from './Components/Schedule.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Home" element={<App />} />
        <Route path="/Schedule" element={<Schedule />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);