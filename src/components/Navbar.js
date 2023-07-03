import React from 'react'
import '../styles/Navbar.css'

function Navbar() {
    return (
        <div>
            <div className="header">
                <div className='logo-brand'>
                    <a href="#home">COINVERSE</a>
                </div>
                <ul className='structure-header'>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#market">Market</a></li>
                    <li><a href="#choose">Choose Us</a></li>
                    <li><a href="#">Join Us</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar