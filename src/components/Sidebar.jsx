import React from 'react'

import { Link } from 'react-router-dom'


const Sidebar = () => {

    return (

        <aside
            className="app-sidebar bg-dark"
            data-bs-theme="dark"
        >

            {/* BRAND */}

            <div className="sidebar-brand">

                <Link
                    to="/dashboard"
                    className="brand-link text-decoration-none"
                >


                    <span className="brand-text fw-light">

                        Digital Forensic Unit

                    </span>

                </Link>

            </div>


            {/* SIDEBAR */}

            <div className="sidebar-wrapper">

                <nav>

                    <ul
                        className="nav sidebar-menu flex-column"
                        data-lte-toggle="treeview"
                        role="menu"
                    >


                        {/* DASHBOARD */}

                        <li className="nav-item">

                            <Link
                                to="/dashboard"
                                className="nav-link"
                            >

                                <i className="nav-icon bi bi-speedometer2"></i>

                                <p>
                                    Dashboard
                                </p>

                            </Link>

                        </li>


                        {/* CASE TIMING LIST */}

                        <li className="nav-item">

                            <Link
                                to="/case-timing-details"
                                className="nav-link"
                            >

                                <i className="nav-icon bi bi-folder"></i>

                                <p>
                                    Case Timing Details
                                </p>

                            </Link>

                        </li>

                           {/* CASE LIST */}

                        <li className="nav-item">

                            <Link
                                to="/"
                                className="nav-link"
                            >

                                <i className="nav-icon bi bi-folder"></i>

                                <p>
                                       Case Details
                                </p>

                            </Link>

                        </li>

                        {/* ADD CASE DETAILS */}
                        <li className="nav-item">

                            <a
                                href="#"
                                className="nav-link"
                            >

                                <i className="nav-icon bi bi-plus-circle"></i>

                                <p>
                                    Add Case Details

                                    <i className="nav-arrow bi bi-chevron-right"></i>
                                </p>

                            </a>


                            {/* SUBMENU */}
                            <ul className="nav nav-treeview">

                                <li className="nav-item">
                                    <Link
                                        to="/add-mobile"
                                        className="nav-link"
                                    >
                                        <i className="nav-icon bi bi-phone"></i>

                                        <p>Mobile</p>
                                    </Link>
                                </li>


                                <li className="nav-item">
                                    <Link
                                        to="/add-storage"
                                        className="nav-link"
                                    >
                                        <i className="nav-icon bi bi-disc"></i>

                                        <p>CD/DVD/Pendrive</p>
                                    </Link>
                                </li>


                             

                                <li className="nav-item">
                                    <Link
                                        to="/add-computer"
                                        className="nav-link"
                                    >
                                        <i className="nav-icon bi bi-device-hdd"></i>

                                        <p>HDD/SSD/Computer</p>
                                    </Link>
                                </li>


                              

                            </ul>

                        </li>


                        {/* ADD CASE TIMING */}

                        <li className="nav-item">

                            <Link
                                to="/add-todo"
                                className="nav-link"
                            >

                                <i className="nav-icon bi bi-clock"></i>

                                <p>
                                    Add Case Timing
                                </p>

                            </Link>

                        </li>


                    </ul>

                </nav>

            </div>

        </aside>

    )

}

export default Sidebar