import React, {Component} from 'react';
import { ReactDOM } from 'react-dom';
import {Route, BrowserRouter as Router, HashRouter, Routes, Switch, Link, NavLink} from "react-router-dom";

import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import Login from './components/Login.js';
import Footer from './components/Footer.js';
import './scss/main.scss';



const App = () => (
    <Router>
      <div>
        <Login />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
);

export default App;

