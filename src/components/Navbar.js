import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
        <nav>
                <ul>
                        <li>
                                <Link to="/">Start</Link>
                        </li>
                        <li>
                                <Link to="/ocochodzi">O co chodzi?</Link>
                        </li>
                        <li>
                                <Link to="/onas">O nas</Link>
                        </li>
                        <li>
                                <Link to="/partnerzy">Fundacja i organizacje</Link>
                        </li>
                        <li>
                                <Link to="/kontakt">Kontakt</Link>
                        </li>
                </ul>          
        </nav>
);

export default Navbar;
