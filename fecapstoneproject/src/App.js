
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Landing_Page from './Components/Landing_Page/LandingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from 'react';


function App() {
  return (
    <>
    <head>
      
    </head>
   <div className='App'>
      <BrowserRouter>
        <NavBar/>
          <Routes>
          <Route path="/" element={<Landing_Page/>}/>
          </Routes>
      </BrowserRouter>
   </div>
   </>
  );
}

export default App;