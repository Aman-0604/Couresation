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
              <p className='text-muted'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-balloon" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 9.984C10.403 9.506 12 7.48 12 5a4 4 0 0 0-8 0c0 2.48 1.597 4.506 4 4.984ZM13 5c0 2.837-1.789 5.227-4.52 5.901l.244.487a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.244-.487C4.789 10.227 3 7.837 3 5a5 5 0 0 1 10 0Zm-6.938-.495a2.003 2.003 0 0 1 1.443-1.443C7.773 2.994 8 2.776 8 2.5c0-.276-.226-.504-.498-.459a3.003 3.003 0 0 0-2.46 2.461c-.046.272.182.498.458.498s.494-.227.562-.495Z" />
                </svg>
                 Learn from 2,000+ India’s top educators</p>
              <p className='text-muted'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-balloon" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 9.984C10.403 9.506 12 7.48 12 5a4 4 0 0 0-8 0c0 2.48 1.597 4.506 4 4.984ZM13 5c0 2.837-1.789 5.227-4.52 5.901l.244.487a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.244-.487C4.789 10.227 3 7.837 3 5a5 5 0 0 1 10 0Zm-6.938-.495a2.003 2.003 0 0 1 1.443-1.443C7.773 2.994 8 2.776 8 2.5c0-.276-.226-.504-.498-.459a3.003 3.003 0 0 0-2.46 2.461c-.046.272.182.498.458.498s.494-.227.562-.495Z" />
                </svg>
                 Access 3,00,000+ live classes, test series, courses and more for free</p>
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
