import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import FooterComponent from './FooterComponent'


const Layout = ({ children }) => {

    return (

        <div className="app-wrapper">
          

            <Navbar />

            <Sidebar />

            <main className="app-main">

                {children}

            </main>

            <FooterComponent />

        </div>

    )

}

export default Layout