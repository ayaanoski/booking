import React, { useState } from 'react';
import SeatSelection from './SeatSelection';

const RegistrationForm = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [seat, setSeat] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && seat) {
      onRegister(name, seat); // Send name and seat number to parent
    } else {
      alert('Please enter your name and confirm your seat!');
    }
  };

  return (
    <div className="registration-form">
      <h2>Register for the Marathon</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <SeatSelection onSelectSeat={(seatNumber) => setSeat(seatNumber)} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
