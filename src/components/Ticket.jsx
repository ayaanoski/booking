import React from 'react';
import './Ticket.css';
import marathonLogo from '../assets/marathon.jpg'; // Replace with your marathon logo image path

const Ticket = ({ name, seat }) => {
  return (
    <div className="ticket-container">
      <div className="ticket-outline">
        {/* Left Section with Logo */}
        <div className="ticket-left">
          <img src={marathonLogo} alt="Marathon Logo" className="ticket-logo" />
        </div>

        {/* Middle Section with Name and Seat */}
        <div className="ticket-center">
          <h1 className="ticket-title">🎟 Annual Marathon 2K25 🎟</h1>
          <p className="ticket-detail"><strong>Name:</strong> {name}</p>
          <p className="ticket-detail"><strong>Seat Number:</strong> {seat}</p>
          <p className="ticket-thank">Thank you for registering!</p>
        </div>

        {/* Right Section for Branding */}
        <div className="ticket-right">
          <p className="ticket-brand">Marathon Event</p>
          <p className="ticket-brand">2K25 Edition</p>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
