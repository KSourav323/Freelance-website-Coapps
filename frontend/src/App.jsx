import Login from "./pages/login.jsx"
import Home from "./pages/home.jsx"
import Landing from "./pages/landing.jsx"
import Signup from "./pages/signup.jsx"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';


function App(){
  return (
  <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/landing" element={<Landing/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
  </Router>
  )
}

export default App
