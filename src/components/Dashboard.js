// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';
import Booking from './Booking';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Limpa o token de autenticação do localStorage
        localStorage.removeItem('token');
        
        // Redireciona para a página de login
        navigate('/');
    };

    return (
        <div className="dashboard">
            <header>
                <div className="navbar">
                    <div className="logo">
                        <img src={logo} alt="Detailify Logo" />
                    </div>
                    <nav>
                        <ul>
                            <li><Link to="#">Test1</Link></li>  
                            <li><Link to="#">Test2</Link></li>
                            <li><Link to="#">Test3</Link></li>
                            <li><Link to="#">Test4</Link></li>
                            <li><Link to="#">Test5</Link></li>
                        </ul>
                    </nav>
                    <div className="logout">
                        <button onClick={handleLogout} className="btn-signout">Logout</button>
                    </div>
                </div>
            </header>

            <div style={{ padding: '20px' }}>
                <h1>Dashboard</h1>
                <p>Bem-vindo ao seu painel de controle!</p>
                <Booking />
            </div>



            <footer>
                <p>© 2024 TNapoleDetailing. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Dashboard;
