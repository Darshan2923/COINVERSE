// import React from 'react'
// import { useState, useEffect } from 'react'
// import '../styles/Market.css'

// function Market() {
//     const [data, setData] = useState([]);
//     // const [coinsLoad, setCoinsLoad] = useState(true);

//     const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`;

//     function numberWithCommas(x) {
//         return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//     }
//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await fetch(url);
//             const parseData = await response.json();
//             setData(parseData);
//         }
//         fetchData();
//     }, [url]);

//     const apiElements = data.map(item => {
//         // Resolved a bug Yayyyy!!!!
//         // div ke andar hi changes karne se error aa rahe the 
//         // That's why i made it a seperate 
//         return (
//             <div className="spam_row_elements_container">
//                 <span className='market_coins_img'>
//                     <img src={item.image} alt="item.name" />{item.name}
//                 </span>
//                 <p>{"$ " + item.current_price.toFixed(2)}</p>
//                 <p
//                     className={
//                         "slider-coin__price " +
//                         (item.price_change_percentage_24h >= 0
//                             ? "green-text"
//                             : "red-text")
//                     }
//                 >
//                     {item.price_change_percentage_24h.toFixed(2) + " %"}
//                 </p>
//                 <p>{"$ " + numberWithCommas(item.market_cap)}</p>

//             </div>
//         )
//     })

//     return (
//         <section id='market'>
//             <div className='market-container'>
//                 <div className="market-title">
//                     <h3>Market Update</h3>
//                 </div>
//                 <div className="market-content__coin-list">
//                     <div className="market-content__coin-list__top">
//                         <p>Coin</p>
//                         <p>Price</p>
//                         <p>24h Change</p>
//                         <p>Market Change</p>
//                     </div>
//                     <div className="market-content__coin-list__row">
//                         <div className="market-content_coin-list_row-elements">
//                             {/* Resolved a bug **Congrats to me!!!** */}
//                             {/* Made a seperate div kyuki same div me chaar elements render ho rahe the
//                         hence grid saathme action le raha tha
//                         */}
//                             {apiElements}
//                         </div>
//                         {console.log(data)}
//                     </div>
//                 </div>

//             </div>
//         </section>
//     )
// }

// export default Market

import { useEffect, useState } from "react";
import '../styles/Market.css'

function Market() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState([]);
    const [apiLoad, setApiLoad] = useState(true);

    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false
  `;

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
        };
        fetchData();
    }, [url]);

    const paginationButtons = [];
    for (let i = 1; i <= 5; i++) {
        paginationButtons.push(
            <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={i === currentPage ? "activePagi" : ""}
            >
                {i}
            </button>
        );
    }

    // console.log(data);

    return (
        <>
            <section id="market" className="market-section">
                <div className="container">
                    <div className="market-content">
                        <h2>Market Update</h2>
                        <div className="market-content__coin-list">
                            <div className="market-content__coin-list__top">
                                <p>Coin</p>
                                <p className="price-top">Price</p>
                                <p className="change-top">24h Change</p>
                                <p>Market Cap</p>
                            </div>
                            <div
                                onLoad={() => setApiLoad(false)}
                                className="market-content__coin-list__row"
                            >
                                {apiLoad && <span className="loader"></span>}
                                {data.map((item) => (
                                    <div className="coin-row_container">
                                        <div className="coin-row">
                                            <span>
                                                <img src={item.image} alt={item.name} /> {item.name}
                                            </span>
                                            <p>{"$ " + item.current_price.toFixed(2)}</p>
                                            <p
                                                className={
                                                    "slider-coin__price " +
                                                    (item.price_change_percentage_24h >= 0
                                                        ? "green-text"
                                                        : "red-text")
                                                }
                                            >
                                                {item.price_change_percentage_24h?.toFixed(2) + " %"}
                                            </p>
                                            <p>{"$ " + numberWithCommas(item.market_cap)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div
                            className="market-content__coin-list__pagination">
                            {paginationButtons}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Market;