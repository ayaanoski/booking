import React, { useState } from 'react';
import './SeatSelection.css';

const SeatSelection = ({ onSelectSeat }) => {
  const totalSeats = 20; // Number of seats
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [occupiedSeats, setOccupiedSeats] = useState([]);

  const handleSeatClick = (seatNumber) => {
    if (!occupiedSeats.includes(seatNumber)) {
      setSelectedSeat(seatNumber);
    }
  };

  const handleConfirmSeat = () => {
    if (selectedSeat) {
      setOccupiedSeats([...occupiedSeats, selectedSeat]);
      onSelectSeat(selectedSeat); // Pass the selected seat back to parent
    }
  };

  return (
    <div className="seat-selection-container">
      <h2>Select Your Seat</h2>
      <div className="seats-grid">
        {Array.from({ length: totalSeats }, (_, i) => i + 1).map((seat) => (
          <div
            key={seat}
            className={`seat ${
              occupiedSeats.includes(seat)
                ? 'occupied'
                : selectedSeat === seat
                ? 'selected'
                : ''
            }`}
            onClick={() => handleSeatClick(seat)}
          >
            {seat}
          </div>
        ))}
      </div>
      <button
        className="confirm-seat-button"
        onClick={handleConfirmSeat}
        disabled={!selectedSeat}
      >
        Confirm Seat
      </button>
    </div>
  );
};

export default SeatSelection;
