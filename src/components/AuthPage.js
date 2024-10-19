// src/components/AuthPage.js
import React from 'react';
import './AuthPage.css'; // Importar estilos personalizados

const AuthPage = () => {
    return (
        <div className="auth-container">
            <div className="login-section">
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
            </div>
            <div className="signup-section">
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
