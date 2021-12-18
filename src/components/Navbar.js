import React from "react";
import { Link } from "react-scroll";

import '../scss/main.scss';
import '../scss/_navbar.scss';
import Home from "./Home";
import HomeAboutUs from "./HomeAboutUs";
import HomeContactFooter from "./HomeContactFooter";
import HomeFourSteps from "./HomeFourSteps";
import HomeHelp from "./HomeHelp";


const Navbar = () => (
        <nav className="navbar">
                <div className="navbar-container">
                        <ul>
                                <li className="nav-item">
                                        <Link to="/" className="nav-links" element={<Home />} >Start</Link>
                                </li>
                                <li className="nav-item">
                                        <Link to="ocochodzi" smooth className="nav-links" element={<HomeFourSteps />} >O co chodzi?</Link>
                                </li>
                                <li className="nav-item">
                                        <Link to="onas" smooth className="nav-links" element={<HomeAboutUs />} >O nas</Link>
                                </li>
                                <li className="nav-item">
                                        <Link to="fundacje" smooth className="nav-links" element={<HomeHelp />}>Fundacja i organizacje</Link>
                                </li>
                                <li className="nav-item">
                                        <Link to="kontakt" smooth className="nav-links" element={<HomeContactFooter />}>Kontakt</Link>
                                </li>
                        </ul>
                </div>          
        </nav>
);

export default Navbar;
