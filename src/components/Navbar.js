import React from 'react'
import '../styles/Navbar.css'

function Navbar() {
    // //Javascript for responsiveness
    // const menuBtn = document.querySelector(".menu-btn");
    // menuBtn.addEventListener("click", () => {
    //     menuBtn.classList.toggle("active");
    // });

    //In React
    const handleClick = () => {
        const menuBtn = document.querySelector('.menu-btn');
        const navigation = document.querySelector('.navigation');
        menuBtn.classList.toggle('active');
        navigation.classList.toggle('active');
    };
    return (
        <section id="nav">
            <div className='navbar-container'>
                <header>
                    <a href="/" className='brand'>Travelophile</a>
                    <div className="menu-btn" onClick={handleClick}></div>
                    <div className="navigation" onClick={handleClick}>
                        <div className="navigation-items">
                            <a href="#nav" className='home'>Home</a>
                            <a href="#section__title" className="popular">Popular</a>
                            <a href="#explore" className='explore'>Explore</a>
                            <a href="/" className="contact">Book</a>
                        </div>
                    </div>
                </header>
            </div>
        </section>

    )
}

export default Navbar