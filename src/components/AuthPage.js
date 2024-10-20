// src/components/AuthPage.js
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './AuthPage.css';

const AuthPage = () => {
    return (
        <div className="auth-container">
            <div className="calendar-section">
                <Calendar
                    minDate={new Date()}
                />
            </div>
            <div className="auth-section">
                <h2>Login</h2>
                <form>
                    <div>
                        <label>Email:</label>
                        <input type="email" required />
                    </div>
                    <div>
                        <label>Senha:</label>
                        <input type="password" required />
                    </div>
                    <button type="submit">Entrar</button>
                </form>

                <h2>Signup</h2>
                <form>
                    <div>
                        <label>Nome:</label>
                        <input type="text" required />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" required />
                    </div>
                    <div>
                        <label>Senha:</label>
                        <input type="password" required />
                    </div>
                    <button type="submit">Registrar</button>
                </form>
            </div>
        </div>
    );
};

export default AuthPage;
