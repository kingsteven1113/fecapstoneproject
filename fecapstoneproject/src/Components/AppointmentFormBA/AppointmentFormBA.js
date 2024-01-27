import React, { useState } from 'react'

const AppointmentFormBA = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [selectedSlot, setSelectedSlot] = useState(null);
  
    const handleSlotSelection = (slot) => {
      setSelectedSlot(slot);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, phoneNumber, date, time });
      setName('');
      setPhoneNumber('');
      setDate('');
      setTime('');

      localStorage.setItem('name', name);
      localStorage.setItem('time', time);
      localStorage.setItem('date', date);
      localStorage.setItem('phoneNumber', phoneNumber);

      
    };
  
    return (
      <form onSubmit={handleFormSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateofappointment">Date of Appointment:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="timeofappointment">Book Time Slot:</label>
          <select
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required>
          <option value="Select a Time" disabled selected hidden></option>
          <option value="9:00AM">9:00AM</option>
          <option value='11:00AM'>11:00AM</option>
          <option value='1:00PM'>1:00PM</option>
          <option value='3:00PM'>3:00PM</option>
          <option value='5:00PM'>5:00PM</option>
          <option value='7:00PM'>7:00PM</option>
          </select>
        </div>

        <button type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentFormBA
