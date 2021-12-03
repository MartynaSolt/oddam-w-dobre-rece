import React from 'react'
import { Link } from 'react-router-dom';

import '../scss/main.scss';
import '../scss/_login.scss';

const Login = () => (
        <nav className="loginbar">
            <div className="login-container">
                <ul>
                    <li className="login-item">
                        <Link to="/logowanie" className="log-links">Zaloguj</Link>
                    </li>
                    <li className="login-item">
                        <Link to="/rejestracja" className="log-links">Załóż konto</Link>
                    </li>
                </ul>
            </div>
        </nav>
);

export default Login;
