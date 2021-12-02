import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => (
        <nav>
            <ul>
                <li>
                    <Link to="/logowanie">Zaloguj</Link>
                </li>
                <li>
                    <Link to="/rejestracja">Załóż konto</Link>
                </li>
            </ul>
        </nav>
);

export default Login;
