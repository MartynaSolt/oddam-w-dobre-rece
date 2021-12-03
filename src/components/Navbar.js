import React from "react";
import { Link } from "react-router-dom";
import HomeFourSteps from "./HomeFourSteps";

import '../scss/main.scss';
import '../scss/_navbar.scss';

const Navbar = () => (
        <nav className="navbar">
                <div className="navbar-container">
                        <ul>
                                <li className="nav-item">
                                        <Link to="/" className="nav-links">Start</Link>
                                </li>
                                <li className="nav-item">
                                        <Link to="/ocochodzi" className="nav-links" element={<HomeFourSteps />} >O co chodzi?</Link>
                                </li>
                                <li className="nav-item">
                                        <Link to="/onas" className="nav-links">O nas</Link>
                                </li>
                                <li className="nav-item">
                                        <Link to="/partnerzy" className="nav-links">Fundacja i organizacje</Link>
                                </li>
                                <li className="nav-item">
                                        <Link to="/kontakt" className="nav-links">Kontakt</Link>
                                </li>
                        </ul>
                </div>          
        </nav>
);

export default Navbar;