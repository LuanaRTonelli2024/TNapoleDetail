// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { database } from '../FireBase';
import { collection, getDocs } from 'firebase/firestore';
import 'react-calendar/dist/Calendar.css';
import '../App.css';

const Dashboard = () => {
  const [userName] = useState('Usuário');
  const [appointments, setAppointments] = useState([]);
  const [value, setValue] = useState(new Date());

  const handleDateChange = (date) => {
    setValue(date);
  };

  // Função para buscar dados do Firestore
  const fetchAppointments = async () => {
    const appointmentsCollection = collection(database, 'appointments');
    const appointmentSnapshot = await getDocs(appointmentsCollection);
    const appointmentList = appointmentSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setAppointments(appointmentList);
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Menu</h2>
        <ul>
          <li>Profile</li>
          <li>My Vehicles</li>
          <li>My Appointments</li>
        </ul>
      </aside>
      <main className="main-content">
        <h1>Seja bem-vindo, {userName}!</h1>
        <div className="calendar-container">
          <Calendar onChange={handleDateChange} value={value} />
        </div>
        <div className="appointments">
          <h2>Meus Agendamentos</h2>
          <ul>
            {appointments.map(appointment => (
              <li key={appointment.id}>{appointment.title} - {appointment.date}</li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

