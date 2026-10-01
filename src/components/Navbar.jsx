import React from 'react'


const Navbar = () => {

    return (

        <nav className="app-header navbar navbar-expand bg-body">

            <div className="container-fluid">

                {/* LEFT SIDE */}

                <ul className="navbar-nav">

                    <li className="nav-item">

                        <button
                            className="nav-link btn"
                            data-lte-toggle="sidebar"
                            type="button"
                        >

                            <i className="bi bi-list"></i>

                        </button>

                    </li>

                </ul>


                {/* RIGHT SIDE */}

                <ul className="navbar-nav ms-auto">

                    <li className="nav-item">

                        <span className="nav-link">

                            <i className="bi bi-person-circle me-1"></i>

                            Admin

                        </span>

                    </li>

                </ul>

            </div>

        </nav>

    )

}

export default Navbar