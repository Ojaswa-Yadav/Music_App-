import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import MusicPlayer from './components/Player/MusicPlayer';
import Navbar from './components/Navigation/Navbar';
import './App.css'; 
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<MusicPlayer />} />
      </Routes>
    </Router>
  );
}

export default App;
