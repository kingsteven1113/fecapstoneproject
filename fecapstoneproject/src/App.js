
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import LandingPage from './Components/Landing_Page/LandingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from 'react';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultationBooking/InstantConsultation';
import BookingAppointments from './Components/BookingAppointments/BookingAppointments/BookingAppointments';
import Notification from './Components/Notifications/Notifications';
import FindDoctorSearchBA from './Components/FindDoctorSearchBA/FindDoctorSearchBA';
import ReviewForm from './ReviewForm/ReviewForm';
import ProfileForm from './Components/ProfileCard/ProfileCard';
import ReportsLayout from './Components/ReportsLayout/ReportsLayout';




function App() {
  return (
    <>
   <div className='App'>
      <BrowserRouter>
        <Notification>
          <Routes>
            <Route path='/fecapstoneproject' element={<LandingPage/>} />
            <Route path='SignUp' element={<SignUp/>} />
            <Route path='Login' element={<Login/>} />
            <Route path="/instant-consultation" element={<InstantConsultation />} />
            <Route path="/search/doctors" element={<BookingAppointments />} />
            <Route path="/finddoctor" element={<FindDoctorSearchBA />} />
            <Route path="/reviews" element={<ReviewForm />} />
            <Route path="/profile" element={<ProfileForm />} />
            <Route path="/reports" element={<ReportsLayout />} />
          </Routes>
        </Notification>
      </BrowserRouter>
   </div>
   </>
  );
}

export default App;