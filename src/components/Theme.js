import React from 'react'
import '../styles/Theme.css'
import logo from '../styles/bitcoin-floating.png'
import logo2 from '../styles/ethereum-floating.png'

function Theme() {

    return (
        <>
            <section id="home" className='hero-section'>
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-content-text">
                            <img className="btc-float" src={logo} alt="bitcoin" />
                            <h1>
                                track and trade <br />
                                <span>Crypto currencies</span>
                            </h1>
                            <img className='eth-float' src={logo2} alt="" />
                        </div>
                    </div>
                </div>
                <div className='top-4'>

                </div>
            </section>

        </>
    )
}

export default Theme