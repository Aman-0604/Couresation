import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
// import styled from "styled-components";
import "../styles/login.css"
// import PropTypes from "prop-types";
const propTypes = {};
const defaultProps = { Task: "logIn" };

export default function Login(props) {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  // console.log(props.Task);
  const submitHandler = async (e) => {
    e.preventDefault();
    let response;
    // console.log(credentials)
    if (props.Task === 'logIn') {
      response = await fetch("http://localhost:8000/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password })//will convert the object into type JSON
      });
    }
    else {
      response = await fetch("http://localhost:8000/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })//will convert the object into type JSON
      });
    }

    const json = await response.json();
    if (json.success) {
      //save the auth token and redirect
      // console.log("success")
      localStorage.setItem('token', json.token);
      navigate("/");
    }
    else {
      props.Task === "logIn" ? navigate("/login") : navigate("/signup");
    }

  }
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
              <p className='text-muted'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-balloon" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 9.984C10.403 9.506 12 7.48 12 5a4 4 0 0 0-8 0c0 2.48 1.597 4.506 4 4.984ZM13 5c0 2.837-1.789 5.227-4.52 5.901l.244.487a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.244-.487C4.789 10.227 3 7.837 3 5a5 5 0 0 1 10 0Zm-6.938-.495a2.003 2.003 0 0 1 1.443-1.443C7.773 2.994 8 2.776 8 2.5c0-.276-.226-.504-.498-.459a3.003 3.003 0 0 0-2.46 2.461c-.046.272.182.498.458.498s.494-.227.562-.495Z" />
                </svg>
                Learn from 2,000+ India’s top educators</p>
              <p className='text-muted'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-balloon" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 9.984C10.403 9.506 12 7.48 12 5a4 4 0 0 0-8 0c0 2.48 1.597 4.506 4 4.984ZM13 5c0 2.837-1.789 5.227-4.52 5.901l.244.487a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.244-.487C4.789 10.227 3 7.837 3 5a5 5 0 0 1 10 0Zm-6.938-.495a2.003 2.003 0 0 1 1.443-1.443C7.773 2.994 8 2.776 8 2.5c0-.276-.226-.504-.498-.459a3.003 3.003 0 0 0-2.46 2.461c-.046.272.182.498.458.498s.494-.227.562-.495Z" />
                </svg>
                Access 3,00,000+ live classes, test series, courses and more for free</p>
            </div>
          </div>
          <div className="right-auth-section d-flex flex-column justify-content-center ms-5">

            <h2 className='fs-1 main mb-0'>{props.Task === "logIn" ? "Login" : props.Task === "forgetPassword" ? "Reset Password" : "Join Courseation"}</h2>
            <span className={`m-0 d-${props.Task !== "forgetPassword" ? "block" : "none"}`}><Link className='fw-light small' to={props.Task === "logIn" ? '/signup' : '/login'}> {props.Task === "logIn" ? 'Create New Account' : 'Already have an Account'}</Link></span>

            <form onSubmit={submitHandler} action={`${props.Task === "signup" ? "/signUp" : props.Task === "logIn" ? "/login" : "forgetPassword"}`} method='post'>

              <div className={`mb-4 form d-${props.Task === "signup" ? "block" : "none"}`}>
                <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                <input type="text" className="form-control" id="Name" name='name' value={credentials.name} onChange={onChange} />
              </div>

              <div className="mb-4 form">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="Email" name='email' aria-describedby="emailHelp" value={credentials.email} onChange={onChange} />
                <div id="emailHelp" className="form-text small">Trust Us, We will not Spam</div>
              </div>

              <div className={`mb-3 form d-${props.Task !== "forgetPassword" ? "block" : "none"}`} >
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="Password" name='password' value={credentials.password} onChange={onChange} />
                <span className={`m-0 text-end d-${props.Task !== "logIn" ? "none" : "block"}`}><Link className="fw-light small" to='/forgetPassword'>Forget Password</Link></span>
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
