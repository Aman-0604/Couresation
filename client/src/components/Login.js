import React from 'react'
import { Link } from 'react-router-dom';
// import styled from "styled-components";
import "../styles/login.css"
// import PropTypes from "prop-types";
const propTypes = {};
const defaultProps = { Task: "logIn" };
export default function Login(props) {
  // console.log(props.Task);
  return (
    <>
      <div className="container login-section my-5 d-flex flex-row w-75">
        <div className="d-flex flex-row">
          <div className="left-auth-section d-flex flex-column">
            <div className="auth-photograph" style={{ border: '0' }}>
              <img src="../images/courseation-promo-image.png" className="img-fluid" alt="..." />
            </div>
            <div className="courseation-promo mx-5">
              <p><strong>Over <span style={{ color: "#3dd4a9" }}>8,00,000+</span> learners trust us for their preparation</strong></p>
              <p className='text-muted'>Learn from 2,000+ India’s top educators</p>
              <p className='text-muted'>Access 3,00,000+ live classes, test series, courses and more for free</p>
            </div>
          </div>
          <div className="right-auth-section d-flex flex-column justify-content-center ms-5">
            <h2 className='fs-1 main'>{props.Task === "logIn" ? "Log in" : "Join Courseation"}</h2>
            <span className={`m-0 d-${props.Task === "logIn" ? "block" : "none"}`}>or <Link className='fw-bold' to='/signup'>create a new account</Link></span>
            <form>
              <span className={`m-0 d-${props.Task === "logIn" ? "none" : "block"}`}>Already have an account?<Link className="fw-bold" to='/login'>Log in</Link></span>
              <div className={`mb-4 form d-${props.Task !== "logIn" ? "block" : "none"}`}>
                <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                <input type="text" className="form-control" id="Name" />
              </div>
              <div className="mb-4 form">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text small">Trust Us, We will not Spam</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;
