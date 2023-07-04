import React from 'react'
import '../styles/Navbar.css'


function Navbar() {
    return (
        <div>
            <div className="header">
                <div className='logo-brand'>
                    <a className='logo-brand-link' href="#home">COINVERSE</a>
                </div>
                <ul className='structure-header'>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#market">Market</a></li>
                    <li><a href="#choose">Choose Us</a></li>
                    <li><a href="#join">Join Us</a></li>
                    <div className="nav-socials">
                        <a rel="noreferrer" href="https://twitter.com/axion_network" target='_blank'><i className="nav-socials fa-brands fa-twitter"></i></a>
                        <a rel="noreferrer" href="https://discord.com/invite/money" target='_blank'><i className="nav-socials fa-brands fa-discord"></i></a>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar