import './App.css';

import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header'
import MapChart from './components/MapChart';
import TableData from './components/TableData';
import Menu from './components/Menu';
import RealTime from './pages/RealTime';
import Today from './pages/Today';
import Future from './pages/Future';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<RealTime />} />
          <Route path="/realTime" element={<RealTime />} />
          <Route path="/today" element={<Today />} />
          <Route path="/future" element={<Future />} />
        </Routes>
      </BrowserRouter>
    </>


  );
}

export default App;
