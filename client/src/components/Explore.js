import React from 'react'
import "../styles/explore.css"
import Goal from './Goal';
import Profile from './Profile';
export default function Explore() {
    return (
        <>
            <Profile username='Aman Gupta' emailid='techbugaman@gmail.com'/>
            <Goal title="Competitive Programming"/>
            <div className="container-fluid explore-background d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
                <div><h1 className='text-muted'>Choose your goal</h1></div>
            </div>
            <div className="main-explore-content container my-5">
                {/* Computer Science */}
                <div className="my-5">
                    <p className='text-muted ms-4'>Computer Science</p>
                    <div className="d-flex justify-content-start flex-wrap">
                        <div className="card goals text-muted ms-3 mb-3">
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                    </div>
                </div>
                {/* Mathematics & Computer Science */}
                <div className="my-5">
                    <p className='text-muted ms-4'>Mathematics & Computer Science</p>
                    <div className="d-flex justify-content-start flex-wrap">
                        <div className="card goals text-muted ms-3 mb-3">
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                    </div>
                </div>
                {/* Electrical Engineering */}
                <div className="my-5">
                    <p className='text-muted ms-4'>Electrical Engineering</p>
                    <div className="d-flex justify-content-start flex-wrap">
                        <div className="card goals text-muted ms-3 mb-3">
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                    </div>
                </div>
                {/* Electronics & Communication */}
                <div className="my-5">
                    <p className='text-muted ms-4'>Electronics & Communication</p>
                    <div className="d-flex justify-content-start flex-wrap">
                        <div className="card goals text-muted ms-3 mb-3">
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <div className="card-body"><h5 className="card-title">Card title</h5></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
