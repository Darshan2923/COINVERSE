import React from 'react'
import '../styles/Theme.css'
import logo from '../styles/bitcoin-floating.png'
import logo2 from '../styles/ethereum-floating.png'

function Theme() {
    const [data, setData] = React.useState([])
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false`;

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    React.useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const parseData = await response.json();
            setData(parseData);
        }
        fetchData();
    }, [url]);

    const top4Elements = data.map(item => {
        return (
            <div className="top-4-spam-elements">
                <div className="top-4_image_element_image">
                    <img src={item?.image} alt={item?.name} />
                </div>
                <div className="top-4-written-content">
                    <p className="slider-coin__name">
                        {item?.name}{" "}
                        <span
                            className={
                                "slider-coin__price " +
                                (item.price_change_percentage_24h <= 0
                                    ? "red-text"
                                    : "green-text")
                            }
                        >
                            {item?.price_change_percentage_24h?.toFixed(2) + "%"}
                        </span>
                    </p>
                    <p className="slider-coin__price">
                        {"$ " + numberWithCommas(item.current_price?.toFixed(2))}
                    </p>
                </div>


                {/* <span className='market_coins_img'>
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
                <p>{"$ " + (item.market_cap)}</p> */}

            </div>
        )
    })



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
                <div className='coin-slider'>
                    {top4Elements}
                </div>
            </section>

        </>
    )
}

export default Theme