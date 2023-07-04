import React from 'react'
import '../styles/Why.css'
import ChooseBox from './ChooseBox'
import bitimg from '../styles/choose-main.png'


function Choose() {
    return (
        <section id='choose' className='why-section'>
            <div className='container'>
                <div className="choose_container">
                    <h2>
                        why <span>Choose us</span>
                    </h2>
                </div>
            </div>

            <div className="container-content">
                <div className="container-content_1">
                    <ChooseBox
                        img="fa-solid fa-wallet"
                        title="CONNECT YOUR WALLET"
                        text="Use Trust Wallet,Metamask or to connect to the app." />
                    <ChooseBox
                        img="fa-solid fa-pen-ruler"
                        title="SELECT YOUR QUANTITY"
                        text="Upload your crypto and set a title, description and price." />
                    <ChooseBox
                        img="fa-solid fa-bolt"
                        title="CONFIRM TRANSACTION"
                        text="Earn by selling your crypto on our marketplace." />
                </div>
                <div className="image-in-between">
                    <img className='logo1' src={bitimg} alt="bitcoin-img" />
                </div>
                <div className="container-content_2">
                    <ChooseBox
                        img="fa-solid fa-satellite-dish"
                        title="RECEIVE YOUR OWN NFTS"
                        text="Invest all your crypto at one place on one platform" />
                    <ChooseBox
                        img="fa-solid fa-chess-knight"
                        title="TAKE A MARKET TO SELL"
                        text="Discover, collect the right crypto collections to buy or sell." />
                    <ChooseBox
                        img="fa-solid fa-boxes-stacked"
                        title="DRIVE YOUR COLLECTION"
                        text="We make it easy to Discover, Invest and manage." />

                </div>
            </div>
        </section>
    )
}

export default Choose