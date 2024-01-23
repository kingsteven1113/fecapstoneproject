import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import './Notifications/Notifications.css';

const Notifications = ({ children }) => {
  const open = 'display: block';
  const closed = 'display: none';
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);
  const [notificationPanel, setNotificationPanel] = useState(open)

  

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData?.name));
    
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);

    }
    else {
      setIsLoggedIn(false);
      setNotificationPanel(closed)
    }

    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
    }
    
    
  }, []);
  return (
    <div>
      <NavBar ></NavBar>
      {children}
      {isLoggedIn && appointmentData && (
        <>
          <div className="appointment-card" id='NotificationPanel' style={{notificationPanel}}>
            <div className="appointment-card__content">
              <h3 className="appointment-card__title">Appointment Details</h3>
              <p className="appointment-card__message">
                <strong>Doctor:</strong> {doctorData?.name}
              </p>
              <p className="appointment-card__message"><strong> Specialty</strong> {doctorData.specialty}</p>
              {appointmentData.map(appointment => (
                                <div key={appointment.id}>
              <p className="appointment-card__message"><strong>Appointment Time:</strong>{appointmentData.timeofAppointment}</p>
              <p className="appointment-card__message"><strong>Appointment Date:</strong>{appointmentData.dateOfAppointment}</p>
              <p className="appointment-card__message"><strong>Patient Name:</strong>{appointmentData.name}</p>
              <p className="appointment-card__message"><strong>Patient Phone Number:</strong>{appointmentData.phoneNumber}</p>
              </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Notifications;