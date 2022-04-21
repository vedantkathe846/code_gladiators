import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './Component/Login';
import MainPage from './Component/MainPage';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/somewhere/else" element={<MainPage />}/>
        <Route path='/' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App;
