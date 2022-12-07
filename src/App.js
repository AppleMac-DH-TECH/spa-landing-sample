import logo from './logo.svg';
import './App.css';

// import module
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from "react-router-dom";
// import component
import Landing from './components/Landing/Landing';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';


function App() {
  return (
    <>
    <Router> 
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>  
          <Footer />
      </Router>
    </>
  );
}

export default App;
