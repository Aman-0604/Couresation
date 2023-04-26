import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/goal.css"

export default function Goal(props) {
    return (
        <>
            <div className="container my-5">
                <div className="study-with-courseation d-flex flex-column">
                    <div className="heading-study-with-courseation ms-4" style={{ width: "30%" }}>
                        <h1>Study {props.title} with Courseation</h1>
                    </div>
                    <div className="subheading-study-with-courseation ms-4">
                        <p>Over 8,00,000 learners trust us for online and offline coaching</p>
                    </div>
                    <div className="pros-with-courseation d-flex flex-row justify-content-evenly align-items-center ms-4">
                        <div className="pros-1 d-flex flex-row">

                        </div>
                        <div className="pros-2 d-flex flex-row">

                        </div>
                        <div className="pros-3 d-flex flex-row">

                        </div>
                    </div>
                </div>
                <div className="classes-of-the-goal container my-5">
                    {/* Classes by topics */}
                    <div className="my-5">
                        <h4 className='ms-4 mb-3'><strong>Classes by {props.title} topics</strong></h4>
                        <div className="d-flex justify-content-start flex-wrap">
                            <Link to="/class" className='text-decoration-none link-secondary'><div className="card goal-cards text-muted ms-3 mb-3">
                                <img src="./images/teacher.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div></Link>
                            <Link to="/class" className='text-decoration-none link-secondary'><div className="card goal-cards text-muted ms-3 mb-3">
                                <img src="./images/teacher.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div></Link>
                            <Link to="/class" className='text-decoration-none link-secondary'><div className="card goal-cards text-muted ms-3 mb-3">
                                <img src="./images/teacher.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div></Link>
                            <Link to="/class" className='text-decoration-none link-secondary'><div className="card goal-cards text-muted ms-3 mb-3">
                                <img src="./images/teacher.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div></Link>
                            <Link to="/class" className='text-decoration-none link-secondary'><div className="card goal-cards text-muted ms-3 mb-3">
                                <img src="./images/teacher.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div></Link>
                            <Link to="/class" className='text-decoration-none link-secondary'><div className="card goal-cards text-muted ms-3 mb-3">
                                <img src="./images/teacher.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div></Link>
                        </div>
                    </div>
                    {/* Classes by educators */}
                    <div className="my-5">
                        <h4 className='ms-4 mb-3'><strong>Classes by {props.title} educators</strong></h4>
                        <div className="d-flex justify-content-start flex-wrap">
                            <Link to="/class" className='text-decoration-none link-secondary'><div className="card goal-cards text-muted ms-3 mb-3">
                                <img src="./images/teacher.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div></Link>
                            <Link to="/class" className='text-decoration-none link-secondary'><div className="card goal-cards text-muted ms-3 mb-3">
                                <img src="./images/teacher.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div></Link>
                            <Link to="/class" className='text-decoration-none link-secondary'><div className="card goal-cards text-muted ms-3 mb-3">
                                <img src="./images/teacher.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div></Link>
                            <Link to="/class" className='text-decoration-none link-secondary'><div className="card goal-cards text-muted ms-3 mb-3">
                                <img src="./images/teacher.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div></Link>
                            <Link to="/class" className='text-decoration-none link-secondary'><div className="card goal-cards text-muted ms-3 mb-3">
                                <img src="./images/teacher.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div></Link>
                            <Link to="/class" className='text-decoration-none link-secondary'><div className="card goal-cards text-muted ms-3 mb-3">
                                <img src="./images/teacher.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
