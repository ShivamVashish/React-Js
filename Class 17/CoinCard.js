import React from "react";

const CoinCard = ({coin})=>{
    const cardstyle = {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        width:'220px',
        boxShadow :'0 2px 8px rgba(0,0,0,0.1)',
        textAlign:'center',
        margin:'16px',
    };

    const imageStyle = {
        width:'64px',
        height:'64px',
        objectFit: 'cover',
        marginBottom: '12px',
    };
    const titleStyle = {
        fontSize:'0.9rem',
        margin: '4px 0'
    };
    const infoStyle={
        fontSize:'0.9rem',
        margin:'4px 0',

    };
    return(
        <div style={cardstyle} className="flex justify-center items-center flex-col bg-black text-white font-bold">
        <img src={coin.image} alt={coin.name} style={imageStyle} />
        <h1 style={titleStyle}>{coin.name}</h1>
        <p style={infoStyle}>Price: ${coin.current_price}</p>
        <p style={infoStyle}>Market Cap Rank : {coin.market_cap_rank}</p>
        </div>
    );
}

export default CoinCard