import React, { useRef } from 'react';
import './Ticket.css';
import marathonLogo from '../assets/marathon.jpg'; // Replace with your marathon logo path
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Ticket = ({ name, seat }) => {
  const ticketRef = useRef();

  // Function to generate and download PDF
  const downloadPDF = () => {
    const input = ticketRef.current;

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4'); // Portrait, Millimeters, A4 paper size
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('marathon-ticket.pdf'); // Download file
    });
  };

  return (
    <div className="ticket-container">
      {/* Ticket Content */}
      <div className="ticket-outline" ref={ticketRef}>
        {/* Left Section */}
        <div className="ticket-left">
          <img src={marathonLogo} alt="Marathon Logo" className="ticket-logo" />
        </div>

        {/* Center Section */}
        <div className="ticket-center">
          <h1 className="ticket-title">🎟 Annual Marathon 2K25 🎟</h1>
          <p className="ticket-detail"><strong>Name:</strong> {name}</p>
          <p className="ticket-detail"><strong>Seat Number:</strong> {seat}</p>
          <p className="ticket-thank">Thank you for registering!</p>
        </div>

        {/* Right Section */}
        <div className="ticket-right">
          <p className="ticket-brand">Marathon Event</p>
          <p className="ticket-brand">2K25 Edition</p>
        </div>
      </div>

      {/* Download Button */}
      <button className="download-button" onClick={downloadPDF}>
        Download Ticket as PDF
      </button>
    </div>
  );
};

export default Ticket;
