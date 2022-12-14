import './App.css';

import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header'
import Menu from './components/Menu';
import RealTime from './pages/RealTime';
import Today from './pages/Today';
import Future from './pages/Future';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<RealTime />} />
            <Route path="/realTime" element={<RealTime />} />
            <Route path="/today" element={<Today />} />
            <Route path="/future" element={<Future />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>


  );
}

export default App;
