import React from 'react';
import logo from './logo.svg';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './signup/Signup'
import Signin from './signin/Signin'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route path="signup" element={Signup}/>
          <Route path="signin" element={Signin}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
