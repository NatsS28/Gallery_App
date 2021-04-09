import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";


const Navbar = ({ click }) => {
    return (
        <nav className="navbar">
            <div className="hamburger_menu" onClick={click} >
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className="links">
                <a href="/gallery">Gallery</a>
            </div>
        </nav>
    )
}

export default Navbar;