import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
const propTypes = {};
const defaultProps = { Page: "home" };
export default function Navbar(props) {
    const [loggedIn, setLoggedIn] = useState(!!localStorage.token);

    useEffect(() => {
        console.log('Token changed:', localStorage.token);
        setLoggedIn(!!localStorage.token);
      }, [localStorage.getItem('token')]);  
    
      console.log(loggedIn)

    const handleLogout = ()=>{
        localStorage.removeItem('token');

    }

    return (
        <>
            {/* Navbar starts */}
            <nav className="navbar navbar-expand-lg" style={{ borderBottom: "1px solid #E9EEF2", color: "white" }}>
                <div className="container-fluid">
                    {/* Logo-without-background */}
                    <Link className="navbar-brand" to="/">
                        <img src="../images/logo-without-bg.png" alt="Logo" width="240" height="50" className="d-inline-block align-text-top ms-5" />
                    </Link>

                    {/* Button enabled in presence of small devices */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* 'Log in' and 'Join for free' Buttons */}

                    <div className={`collapse navbar-collapse justify-content-end`} id="navbarSupportedContent">
                        <ul className={`navbar-nav mb-2 mb-lg-0 `}>
                        {!localStorage.getItem('token') ? <Link className='dropdown-item' to="/login">
                                        <button type="button" className="btn">Login</button>
                                    </Link> : <Link className='dropdown-item' to="/login">
                                        <button type="button" onClick={handleLogout} className="btn">Logout</button>
                                    </Link>}
                            {/* <li className={`nav-item d-${loggedIn ? "block":"none"}`} >
                                <button type="button" className="btn btn-outline-success me-3" onClick={handleLogout}>Log Out</button>
                            </li>
                            <li className={`nav-item d-${!loggedIn? "block":"none"}`}>
                                <Link to="/login"><button type="button" className="btn btn-outline-success me-3">Log in</button></Link>
                            </li>
                            <li className={`nav-item d-${!loggedIn ? "block":"none"}`}>
                                <Link to="signup"><button type="button" className="btn btn-secondary me-5">Join for free</button></Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Navbar ends */}
        </>
    )
}

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;