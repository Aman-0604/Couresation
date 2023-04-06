import React from 'react'
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
const propTypes = {};
const defaultProps = {Page:"home"};
export default function Navbar(props) {
    console.log(props.Pa)
    return (
        <>
            {/* Navbar starts */}
            <nav className="navbar navbar-expand-lg" style={{borderBottom:"1px solid #E9EEF2", color:"white"}}>
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
                    {/* d-${props.Page === "home" ? "block" :"none"} */}
                        <ul className={`navbar-nav mb-2 mb-lg-0 `}>
                            <li className="nav-item">
                                <button type="button" className="btn btn-outline-success me-3"><Link to="/login">Log in</Link></button>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-secondary me-5"><Link to="signup">Join for free</Link></button>
                            </li>
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