import React from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';
import "../styles/studymaterial.css"
const propTypes = {};
const defaultProps = { Title: "DSA" };

const StudyMaterial = (props) => {
    return (
        <>
            <div className='text-muted row container my-5 m-auto'>
                <div className='col-md-9'>
                    <h1 className='d-block text-center mb-4'>{props.Title} Study Material</h1>
                    <span className='text-decoration-underline' style={{ fontWeight: "bolder" }}>About the Subject</span>
                    <div className="my-4">
                        <p className={`d-${props.Title === "DSA" ? "block" : "none"}`}> Data Structures are ways of organizing and storing data in a computer so that it can be accessed and manipulated efficiently. Algorithms are step-by-step procedures used to solve problems or perform specific tasks. Together, data structures and algorithms form the foundation of computer science and are essential for writing efficient and effective software programs.</p>
                        <p className={`d-${props.Title === "ADA" ? "block" : "none"}`}> ADA (Analysis and Design of Algorithms) involves evaluating and improving the efficiency of algorithms. Analysis involves understanding how long an algorithm takes to run and how much memory it requires. Design involves creating new or modifying existing algorithms to solve problems in an efficient and effective way.</p>
                        <p className={`d-${props.Title === "OS" ? "block" : "none"}`}> OS (Operating System) is a software program that manages computer hardware and software resources and provides services for computer programs. It acts as an intermediary between the computer hardware and software, enabling them to communicate and work together. An OS performs various functions such as memory management, process management, file management, device management, and security management. It allows users to interact with the computer system through a user interface and provides a platform for running applications and executing tasks.</p>
                        <p className={`d-${props.Title === "CN" ? "block" : "none"}`}> Computer networks enable communication and data transfer between different devices and systems. They can be categorized into different types such as LAN, WAN, MAN, and WLAN. Network protocols such as TCP/IP and HTTP enable communication and data transfer between devices. Network security measures such as firewalls and encryption ensure the privacy and security of data being transmitted over the network.</p>
                    </div>
                    <span className='text-decoration-underline' style={{ fontWeight: "bolder" }}>Topic List</span>
                    <div className="d-flex justify-content-start flex-wrap my-4">
                        <div className="card goals text-muted ms-3 mb-3 d-flex flex-row justify-content-center align-items-center">
                            <div className='ms-3 d-flex justify-content-center align-items-center' style={{border: "1px solid black",borderRadius: "50%", width:"50px", height:"50px", backgroundColor: "cyan"}}><div><h3>C</h3></div></div>
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3  d-flex flex-row justify-content-center align-items-center">
                            <div className='ms-3 d-flex justify-content-center align-items-center' style={{border: "1px solid black",borderRadius: "50%", width:"50px", height:"50px", backgroundColor: "cyan"}}><div><h3>C</h3></div></div>
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3  d-flex flex-row justify-content-center align-items-center">
                            <div className='ms-3 d-flex justify-content-center align-items-center' style={{border: "1px solid black",borderRadius: "50%", width:"50px", height:"50px", backgroundColor: "cyan"}}><div><h3>C</h3></div></div>
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3  d-flex flex-row justify-content-center align-items-center">
                            <div className='ms-3 d-flex justify-content-center align-items-center' style={{border: "1px solid black",borderRadius: "50%", width:"50px", height:"50px", backgroundColor: "cyan"}}><div><h3>C</h3></div></div>
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3  d-flex flex-row justify-content-center align-items-center">
                            <div className='ms-3 d-flex justify-content-center align-items-center' style={{border: "1px solid black",borderRadius: "50%", width:"50px", height:"50px", backgroundColor: "cyan"}}><div><h3>C</h3></div></div>
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3  d-flex flex-row justify-content-center align-items-center">
                            <div className='ms-3 d-flex justify-content-center align-items-center' style={{border: "1px solid black",borderRadius: "50%", width:"50px", height:"50px", backgroundColor: "cyan"}}><div><h3>C</h3></div></div>
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3  d-flex flex-row justify-content-center align-items-center">
                            <div className='ms-3 d-flex justify-content-center align-items-center' style={{border: "1px solid black",borderRadius: "50%", width:"50px", height:"50px", backgroundColor: "cyan"}}><div><h3>C</h3></div></div>
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3  d-flex flex-row justify-content-center align-items-center">
                            <div className='ms-3 d-flex justify-content-center align-items-center' style={{border: "1px solid black",borderRadius: "50%", width:"50px", height:"50px", backgroundColor: "cyan"}}><div><h3>C</h3></div></div>
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3  d-flex flex-row justify-content-center align-items-center">
                            <div className='ms-3 d-flex justify-content-center align-items-center' style={{border: "1px solid black",borderRadius: "50%", width:"50px", height:"50px", backgroundColor: "cyan"}}><div><h3>C</h3></div></div>
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 border border-5 '>
                    <h3 className='text-center my-4'>Related Links</h3>
                    <p>We will temporarily paste the related YouTube Playlists links here.</p>
                </div>
            </div>
        </>
    )
}

StudyMaterial.propTypes = propTypes;
StudyMaterial.defaultProps = defaultProps;
export default StudyMaterial;