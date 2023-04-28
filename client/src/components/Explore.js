import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/explore.css"
export default function Explore() {
    return (
        <>
            <div className="container-fluid explore-background d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
                <div><h1 className='text-muted'>Choose your goal</h1></div>
            </div>
            <div className="main-explore-content container my-5">
                {/* Computer Science */}
                <div className="my-5">
                    <p className='text-muted ms-4'>Software Engineering</p>
                    <div className="d-flex justify-content-start flex-wrap">
                        <div className="card goals text-muted ms-3 mb-3">
                            <Link to="/goal" className='text-decoration-none link-secondary'><div className="card-body"><h5 className="card-title">ADA</h5></div></Link>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <Link to="/goal" className='text-decoration-none link-secondary'><div className="card-body"><h5 className="card-title">OOSE</h5></div></Link>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <Link to="/goal" className='text-decoration-none link-secondary'><div className="card-body"><h5 className="card-title">SE</h5></div></Link>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <Link to="/goal" className='text-decoration-none link-secondary'><div className="card-body"><h5 className="card-title">OS</h5></div></Link>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <Link to="/goal" className='text-decoration-none link-secondary'><div className="card-body"><h5 className="card-title">CSA</h5></div></Link>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <Link to="/goal" className='text-decoration-none link-secondary'><div className="card-body"><h5 className="card-title">DBMS</h5></div></Link>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <Link to="/goal" className='text-decoration-none link-secondary'><div className="card-body"><h5 className="card-title">TOC</h5></div></Link>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <Link to="/goal" className='text-decoration-none link-secondary'><div className="card-body"><h5 className="card-title">ML</h5></div></Link>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <Link to="/goal" className='text-decoration-none link-secondary'><div className="card-body"><h5 className="card-title">DSA</h5></div></Link>
                        </div>
                    </div>
                </div>
                {/* Mathematics & Computer Science */}
                <div className="my-5">
                    <p className='text-muted ms-4'>Mathematics & Computer Science</p>
                    <div className="d-flex justify-content-start flex-wrap">
                        <div className="card goals text-muted ms-3 mb-3">
                            <Link to="/goal" className='text-decoration-none link-secondary'><div className="card-body"><h5 className="card-title">Probability</h5></div></Link>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <Link to="/goal" className='text-decoration-none link-secondary'><div className="card-body"><h5 className="card-title">Real Analysis</h5></div></Link>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <Link to="/goal" className='text-decoration-none link-secondary'><div className="card-body"><h5 className="card-title">Complex Analysis</h5></div></Link>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <Link to="/goal" className='text-decoration-none link-secondary'><div className="card-body"><h5 className="card-title">ADA</h5></div></Link>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <Link to="/goal" className='text-decoration-none link-secondary'><div className="card-body"><h5 className="card-title">CN</h5></div></Link>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <Link to="/goal" className='text-decoration-none link-secondary'><div className="card-body"><h5 className="card-title">Matrix Computation</h5></div></Link>
                        </div>
                        <div className="card goals text-muted ms-3 mb-3">
                            <Link to="/goal" className='text-decoration-none link-secondary'><div className="card-body"><h5 className="card-title">Financial Engineering</h5></div></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
