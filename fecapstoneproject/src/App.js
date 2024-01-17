
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import LandingPage from './Components/Landing_Page/LandingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from 'react';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultationBooking/InstantConsultation';

function App() {
  return (
    <>
   <div className='App'>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='SignUp' element={<SignUp/>} />
            <Route path='Login' element={<Login/>} />
            <Route path="/instant-consultation" element={<InstantConsultation />} />
          </Routes>
      </BrowserRouter>
   </div>
   </>
  );
}

export default App;