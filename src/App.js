import React, {useState} from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Blog from './Component/Blog';
import Login from './Component/Login';
import MainPage from './Component/MainPage';
function App() {
  const [isNew, updateIsNew] = useState(false);
  return (
    <Router>
      <Routes>
        <Route exact path='/blog/:id' element={<Blog />}/>
        <Route exact path="/blogs" element={<MainPage isNew={isNew}/>}/>
        <Route path='/' element={<Login update={updateIsNew} />} />
      </Routes>
    </Router>
  )
}

export default App;
