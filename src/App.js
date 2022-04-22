import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import Login from './components/Login';

import './App.css';

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/blogs" element={<MainPage />}/>
      <Route exact path="/" element={<Login />}/>
    </Routes>
  </Router>
);

export default App;
