// @ts-nocheck
import React from 'react';
import {useForm} from 'react-hook-form'
import logo from './logo.svg';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home/Home'
import Signup from './signup/Signup'
import Signin from './signin/Signin'
import './App.css';
import PrivateRoute from './privateroute/Privateroute';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
                <PrivateRoute>
                  <Home/>
                </PrivateRoute>
            }
          />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Signin/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
