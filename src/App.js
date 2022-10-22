import './App.css';

import React, { Component } from 'react';
import Header from './components/Header'
import MapChart from './components/MapChart';
import TableData from './components/TableData';

function App() {
  return (
    <>
      <Header></Header>
      <MapChart></MapChart>
      <TableData></TableData>
    </>
  );
}

export default App;
