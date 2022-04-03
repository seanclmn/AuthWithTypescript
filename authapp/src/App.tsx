// @ts-nocheck
import React,{useState,useEffect} from 'react';
import {useForm} from 'react-hook-form'
import logo from './logo.svg';
import {auth } from './Firebase'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './home/Home'
import Signup from './signup/Signup'
import Signin from './signin/Signin'
import PrivateRoute from './privateroute/Privateroute';
import AuthProvider from './auth/Auth';


function App() {

  const [currentUser,setCurrentUser] = useState(null)

  useEffect(()=>{
      auth.onAuthStateChanged(setCurrentUser)
  },[])

  return (
      <AuthProvider>
        <Router>
          <Routes>
            <Route
              exact path="/"
              element={
                  <PrivateRoute>
                    <Home/>
                  </PrivateRoute>
              }
            />
            <Route exact path="/signup" element={<Signup/>}/>
            <Route exact path="/signin" element={<Signin/>}/>
          </Routes>
        </Router>
      </AuthProvider>
  );
}

export default App;
