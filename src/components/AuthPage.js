// src/components/AuthPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, database } from '../FireBase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      let userCredential;

      if (isSignup) {
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
        setSuccess('Cadastro realizado com sucesso!');
      } else {
        userCredential = await signInWithEmailAndPassword(auth, email, password);
        navigate('/dashboard');
        //setSuccess('Login realizado com sucesso!');
      }

      const userId = userCredential.user.uid; // Obtendo o ID do usuário
      const reservationRef = ref(database, 'reservations/' + userId);
      await set(reservationRef, {
        email,
        date: date.toISOString(), // Armazenando a data em formato ISO
      });


      setEmail('');
      setPassword('');
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="auth-page">
      <h2>{isSignup ? 'Cadastro' : 'Login'}</h2>
      <form onSubmit={handleAuth}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">{isSignup ? 'Cadastrar' : 'Entrar'}</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <button onClick={() => setIsSignup((prev) => !prev)}>
        {isSignup ? 'Já tem uma conta? Faça login' : 'Não tem uma conta? Cadastre-se'}
      </button>

      <h3>Escolha uma data</h3>
      <Calendar
        onChange={setDate}
        value={date}
      />
    </div>
  );
};

export default AuthPage;
