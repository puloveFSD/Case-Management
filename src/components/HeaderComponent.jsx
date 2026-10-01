import React from 'react'

const HeaderComponent = () => {
    return (
        <div>

            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a href="http://localhost:3000" className='navbar-brand'>
                           <div className="d-flex justify-content-center align-items-center">
        
        <img
            src="/src/assets/ciaaLogo.png"
            alt="Logo"
            className="me-3"
            style={{ width: "120px", height: "120px" }}
        />

        <div>
            <h3 className="mb-1 text-danger">
                Commission For The Investigation
                
                of Abuse of Authority
            </h3>

            <h5 className="text-primary mb-0">
                Digital Forensic Unit
            </h5>
        </div>

    </div>
                        </a>
                    </div>
                </nav>
            </header>

        </div>
    )
}

export default HeaderComponent