import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from 'react';


function App() {
  return (
   <div className='App'>
      <BrowserRouter>
        <NavBar>
          <Routes></Routes>
        </NavBar>
      </BrowserRouter>
   </div>
  );
}

export default App;