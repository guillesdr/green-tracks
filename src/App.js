import './App.css';

import React, { Component } from 'react';
import Header from './components/Header'
import MapChart from './components/MapChart';
import TableData from './components/TableData';
import Menu from './components/Menu';

function App() {
  return (
    <>
      <Header></Header>
      <Menu></Menu>
      <div class="max-w-sm w-full lg:max-w-full lg:flex">
        <MapChart></MapChart>
      </div>

      <TableData></TableData>
    </>
  );
}

export default App;
