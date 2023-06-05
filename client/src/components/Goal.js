import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/goal.css"

export default function Goal(props) {
    const topicsData = [
        ["key1", "value1"],
        ["key2", "value2"],
        ["key3", "value3"],
        ["key4", "value4"],
        ["key5", "value5"],
    ];
    const educatorsData = [
        ["key6", "value6"],
        ["key7", "value7"],
        ["key8", "value8"],
        ["key9", "value9"],
        ["key10", "value10"],
    ];
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
                </div>
                <div className="classes-of-the-goal container my-5">
                    {/* Classes by topics */}
                    <div className="my-5">
                        <h4 className='ms-4 mb-3'><strong>Classes by {props.title} topics</strong></h4>
                        <div className="d-flex justify-content-start flex-wrap">
                            {topicsData.map((item, index) => {
                                return (
                                    <Link to="/class" className='text-decoration-none link-secondary' key={index}>
                                        <div className="card goal-cards text-muted ms-3 mb-3">
                                            <img src="./images/teacher.png" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{item[0]}</h5>
                                                <p className="card-text">{item[1]}</p>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    {/* Classes by educators */}
                    <div className="my-5">
                        <h4 className='ms-4 mb-3'><strong>Classes by {props.title} educators</strong></h4>
                        <div className="d-flex justify-content-start flex-wrap">
                            {educatorsData.map((item, index) => {
                                return (
                                    <Link to="/class" className='text-decoration-none link-secondary' key={index}>
                                        <div className="card goal-cards text-muted ms-3 mb-3">
                                            <img src="./images/teacher.png" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{item[0]}</h5>
                                                <p className="card-text">{item[1]}</p>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
