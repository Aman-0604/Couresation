import React from 'react'
// import { Link } from "react-router-dom";
import "../styles/home.css"

export default function Home() {
  return (
    <>
      <div className="home">
          <div className="section container my-5 d-flex flex-column justify-content-center" id="section-1" style={{ height: '500px' }}>
              <div className="section-1-heading mb-5" style={{ width: '30%' }}>
                  <h1>India's largest learning platform</h1>
              </div>

              <div className="section-1-button mb-4">
                  <button type="button" className="btn btn-success">Start learning</button>
              </div>

              <div className="section-1-subheading d-flex flex-row">
                  <div className="section-1-subheading1" style={{ width: '13%', color: 'rgb(140 141 143)' }}>
                      Popular courses :
                  </div>

                  <div className="section-1-subheading2 d-flex flex-row" style={{ color: '#6EC397' }}>
                      <div className="section-1-course-1 me-3">Data Structures & Algorithms</div>
                      <div className="section-1-course-2 me-3">Algorithm Design & Analysis</div>
                      <div className="section-1-course-3 me-3">Operating Systems</div>
                      <div className="section-1-course-4 me-3">Computer Networks</div>
                  </div>
              </div>
          </div>

        <div className="section container d-flex flex-row justify-content-center my-5" id="section-2">
            <div className="card me-5" style={{ width: "22rem", border: "none" }}>
                <img src="../images/live-classes.png" className="card-img-top" alt="..." />

                <div className="card-body">
                    <h4 className="card-title">Daily live classes</h4>
                    <p className="card-text">Chat with educators, ask questions, answer live polls, and get your doubts cleared - all while the class is going on</p>
                </div>
            </div>

            <div className="card me-5" style={{ width: "22rem", border: "none" }}>
                <img src="../images/revise.png" className="card-img-top" alt="..." />

                <div className="card-body">
                    <h4 className="card-title">Practice and revise</h4>
                    <p className="card-text">Learning isn't just limited to classes with our practice section, mock tests and lecture notes shared as PDFs for your revision</p>
                </div>
            </div>

            <div className="card me-5" style={{ width: "22rem", border: "none" }}>
                <img src="../images/learn.png" className="card-img-top" alt="..." />

                <div className="card-body">
                    <h4 className="card-title">Learn anytime, anywhere</h4>
                    <p className="card-text">One subscription gets you access to all our live and recorded classes to watch from the comfort of any of your devices</p>
                </div>
            </div>
        </div>

        <div className="section container my-5 d-flex flex-row align-items-center" id="section-3" style={{ height: '500px' }}>
            <div className="left-subsection-3 d-flex flex-column justify-content-center ms-5">
                <div className="heading-section-3 mb-5"  style={{ width: '60%' }}>
                    <h1>Get the learning app</h1>
                </div>

                <div className="subheading-section-3 mb-4" style={{ width: '60%' }}>
                    <p>Download lessons and learn anytime, anywhere with the Courseation app</p>
                </div>

                <div className="buttons-section-3 d-flex flex-row align-items-center">
                    <div className="app-store download-app-button">
                        Downolad on the app store
                    </div>

                    <div className="google-play download-app-button mx-3">
                        Get it on google play
                    </div>
                </div>
            </div>

            <div className="right-subsection-3 ms-5">
                <video width="500" height="500" autoPlay loop>
                    <source src="../images/download-app.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>

        <div className="section container my-5 d-flex flex-row align-items-center" id="section-4" style={{ height: '700px' }}>
            <div className="left-subsection-4 d-flex flex-column justify-content-center ms-5">
                <div className="heading-section-4 mb-5" style={{ width: '60%' }}>
                    <h1>Start Learning with Courseation</h1>
                </div>

                <div className="subheading-section-4 mb-4" style={{ width: '50%' }}>
                    Get unlimited access to structured courses & doubt clearing sessions
                </div>

                <div className="button-section-4">
                    <button type="button" className="btn btn-success">Start learning</button>
                </div>
            </div>

            <div className="right-subsection-4 ms-5">
                <div className="card about-courseation-card" id='courses-card'>
                    <img src="../images/courses.png" className="card-img-top" alt="..." />
                </div>

                <div className="card about-courseation-card" id='live-sesssion-card'>
                    <img src="../images/live-session.png" className="card-img-top" alt="..." />
                </div>

                <div className="card about-courseation-card" id='educators-card'>
                    <img src="../images/educators.png" className="card-img-top" alt="..." />
                </div>

                <div className="card about-courseation-card" id='mins-watched-card'>
                    <img src="../images/mins-watched.png" className="card-img-top" alt="..." />
                </div>

                <div className="card about-courseation-card" id='video-lessons-card'>
                    <img src="../images/video-lessons.png" className="card-img-top" alt="..." />
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
