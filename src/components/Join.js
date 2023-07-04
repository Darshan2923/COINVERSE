import React from 'react'
import '../styles/Join_footer.css'

function Join() {
    return (
        <section id='join'>
            <div className='join-us-discord'>
                <div className="join-title">
                    <h1>Join Us Via <span>Discord</span></h1>
                </div>
                <div className="join-subtitle">Invest and manage all your crypto at one place</div>
            </div>
            <div className="button-join"><input type="button" value={"Join Via Discord"} /></div>
            <footer>
                <div className="footer-content">
                    <div className="footer-content__socials">
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-discord"></i>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-youtube"></i>
                    </div>
                    <div className="footer-content__text">
                        <p>Privacy</p>
                        <p>Terms of Use</p>
                    </div>
                </div>
            </footer>
        </section>

    )
}

export default Join