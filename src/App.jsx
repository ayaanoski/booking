import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Home';
import RegistrationForm from './components/RegistrationForm';
import Ticket from './components/Ticket';
import './App.css';

function App() {
  const [page, setPage] = useState('home');
  const [name, setName] = useState('');
  const [seat, setSeat] = useState(null);

  const handleRegister = (registrantName, selectedSeat) => {
    setName(registrantName);
    setSeat(selectedSeat);
    setPage('ticket');
  };

  return (
    <div>
      <Header />
      {page === 'home' && <Home onNavigate={() => setPage('register')} />}
      {page === 'register' && <RegistrationForm onRegister={handleRegister} />}
      {page === 'ticket' && <Ticket name={name} seat={seat} />}
      <Footer />
    </div>
  );
}

export default App;
