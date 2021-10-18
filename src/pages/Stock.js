import React from "react";
import stocks from "../data.json"

function Stock (props) {
    //Gets the stock by filtering the symbol from data
    const stock = props.stocks.filter(stock => stock.symbol === props.match.params.symbol)[0]
    //loaded function for when data is fetched
    const loaded = () => {
        return (
            <div>
                <h1>Stock Name: {stock.name}</h1>
                <h3>Stock Symbol: {stock.symbol}</h3>
                <h3>Stock Price: {stock.lastPrice}</h3>
            </div>
        );
    };

    // when function doesn't exist
    const loading = () => {
        return <h1> "One moment please..."</h1>;
    };
    // if stock has data, run the loaded function, otherwise, run loading
    return stock ? loaded() : loading();
};
export default Stock;