// App.js or your route configuration file
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import PollingHomepage from './components/PollingHomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign" element={<Signup />} />
        <Route path="/home" element={<PollingHomepage />} />
      </Routes>
    </Router>
  );
};

export default App;