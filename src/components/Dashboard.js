// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { db } from '../FireBase'; // Ajuste o caminho da importação
import { collection, getDocs } from 'firebase/firestore';
import 'react-calendar/dist/Calendar.css';
import '../App.css'; // Ajuste o caminho da importação

const Dashboard = () => {
  const [userName] = useState('Usuário'); // Substitua pelo nome do usuário real
  const [appointments, setAppointments] = useState([]);
  const [value, setValue] = useState(new Date());

  const handleDateChange = (date) => {
    setValue(date);
  };

  // Função para buscar dados do Firestore
  const fetchAppointments = async () => {
    const appointmentsCollection = collection(db, 'appointments');
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

