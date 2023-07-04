import React from 'react'
import '../styles/Join_footer.css'
import logo1 from '../styles/bitcoin-floating.png'
import logo2 from '../styles/ethereum-floating.png'

function Join() {
    return (
        <section id='join'>
            <div className='join-us-discord'>
                <div className="join-title">
                    <img className='eth-float2' src={logo2} alt="" />
                    <h1>Join Us Via <br /> <span>Discord</span></h1>
                    <img className='btc-float2' src={logo1} alt="" />
                </div>
                <div className="join-subtitle">Invest and manage all your crypto at <br /> one place</div>
            </div>
            <div className="button-join"><button className='link-button'><a rel="noreferrer" href="https://discord.com/invite/money" target='_blank'>Join Via Discord</a></button></div>
            <footer>
                <div className="footer-content">
                    <div className="footer-content__socials">
                        <a rel="noreferrer" href="https://twitter.com/axion_network" target='_blank'><i className="fa-brands fa-twitter"></i></a>
                        <a rel="noreferrer" href="https://discord.com/invite/money" target='_blank'><i className="fa-brands fa-discord"></i></a>
                        <a rel="noreferrer" href="https://www.facebook.com/AxionCryptoCD/" target='_blank'><i className="fa-brands fa-facebook"></i></a>
                        <a rel="noreferrer" href="https://www.youtube.com/channel/UCfA9GNOsiYfdoEEXgOvAtYQ" target='_blank'><i className="fa-brands fa-youtube"></i></a>

                    </div>
                    <div className="footer-content__text">
                        <p className='privacy'>Privacy</p>
                        <p>Terms of Use</p>
                    </div>
                </div>
            </footer>
        </section>

    )
}

export default Join