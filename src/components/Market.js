import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/Market.css'

function Market() {
    const [data, setData] = useState([]);
    // const [coinsLoad, setCoinsLoad] = useState(true);

    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false`;
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const parseData = await response.json();
            setData(parseData);
        }
        fetchData();
    }, [url]);

    const apiElements = data.map(item => {
        return (
            <div className="market-container__row-elements">
                <span className='market_coins_img'>
                    <img src={item.image} alt="item.name" />{item.name}
                </span>
                <p>{"$ " + item.current_price.toFixed(2)}</p>
                <p
                    className={
                        "slider-coin__price " +
                        (item.price_change_percentage_24h >= 0
                            ? { style: { color: "green" } }
                            : { style: { color: "red" } })
                    }
                >
                    {item.price_change_percentage_24h.toFixed(2) + " %"}
                </p>
                <p>{"$ " + (item.market_cap)}</p>

            </div>
        )
    })

    return (
        <section id='market'>
            <div className='market-container'>
                <div className="market-title">
                    <h3>Market Update</h3>
                </div>
                <div className="market-content__coin-list">
                    <div className="market-content__coin-list__top">
                        <p>Coin</p>
                        <p>Price</p>
                        <p>24h Change</p>
                        <p>Market Change</p>
                    </div>
                    <div className="market-content__coin-list__row">
                        {apiElements}
                        {console.log(data)}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Market