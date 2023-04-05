import React from 'react'
// import styled from "styled-components";
import PropTypes from "prop-types";
import "../styles/login.css"
const propTypes = {};
const defaultProps = {Task:"logIn"};
export default function Login(props) {
  console.log(props.Task);
  return (
<div className="modal-body w-50 modal-dialog-centered border border-5" style={{margin:"auto",border:"black 5px solid" }}>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6 left">
        <p className='Heading'>Over <span className='Coloured'>8,00,000+</span> learners trust us for their preparation</p>
        <div><img className="Images" id='ig1' src='../images/educators.png' alt='ImageError'/></div>
        <div><img className="Images" id="ig2" src='../images/live-session.png' alt='ImageError'/></div>
        <div><img className="Images" id="ig3" src='../images/mins-watched.png' alt='ImageError'/></div>
        <div><img className="Images" id="ig4" src='../images/video-lessons.png' alt='ImageError'/></div>
        <p>Learn from 2,000+ India’s top educators</p>
        <p>Access 3,00,000+ live classes, test series, courses and more for free</p>
      </div>

      <div class="col-md-6 ms-auto">
        <h2 className='fs-1 main'>{props.Task==="logIn" ? "LogIn" : "Join Courseation"}</h2>
        <span className={`m-0 d-${props.Task==="logIn" ? "block" : "none"}`}>or <a className='fw-bold' href='/signup'>create a new account</a></span>
        <form>
        
        <span className={`m-0 d-${props.Task==="logIn" ? "none" : "block"}`}>Already have an account? <a className="fw-bold" href='/login'>Log in</a></span>
        <form></form>
        
        <div class={`mb-4 form d-${props.Task!=="logIn" ? "block" : "none"}`}>
            <label for="exampleInputPassword1" class="form-label">Name</label>
            <input type="text" class="form-control" id="Name"/>
        </div>
        <div class="mb-4 form">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text small">Trust Us, We will not Spam</div>
        </div>
        <div className='text-center'><button type="submit" class="btn btn-primary btn-lg">Submit</button></div>
</form>
      </div>
    </div>
  </div>
</div>
  )
}

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;
