// src/components/Booking.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Booking.css';

const Booking = () => {
    const [date, setDate] = useState(new Date());
    const [availableTimes, setAvailableTimes] = useState(['09:00', '10:00', '14:00', '15:00', '16:00']);
    const [selectedTime, setSelectedTime] = useState('');

    const handleDateChange = (newDate) => {
        setDate(newDate);
        // Aqui você pode atualizar os horários disponíveis com base na data selecionada
    };

    const handleTimeChange = (e) => {
        setSelectedTime(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedTime) {
            alert(`Reserva feita para ${date.toLocaleDateString()} às ${selectedTime}`);
            // Adicione a lógica para enviar os dados ao servidor
        } else {
            alert("Por favor, selecione um horário.");
        }
    };

    return (
        <div className="booking-container">
            <h1>Reservar Serviço</h1>
            <div className="calendar">
                <Calendar
                    onChange={handleDateChange}
                    value={date}
                    minDate={new Date()}
                />
            </div>
            <div className="time-selection">
                <label>Selecione um horário:</label>
                <select value={selectedTime} onChange={handleTimeChange}>
                    <option value="">Selecione um horário</option>
                    {availableTimes.map((time) => (
                        <option key={time} value={time}>{time}</option>
                    ))}
                </select>
            </div>
            <button onClick={handleSubmit}>Reservar</button>
        </div>
    );
};

export default Booking;
