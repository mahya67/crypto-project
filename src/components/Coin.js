import React from 'react';

//CSS
import styles from './coin.module.css'

const Coin = ({symbol,name,image,price,marketCap,priceChange}) => {
    return (
        <div className={styles.container}>

            <img className={styles.img} src={image} alt={name} />
            <span className={styles.name}>{name}</span>
            <span className={styles.symbol}>{symbol.toUpperCase()}</span>
            <span className={styles.price}>$ {price.toLocaleString()}</span>
            <span className={priceChange > 0 ? styles.redChange : styles.greenChange}>{priceChange.toFixed(2)}</span>
            <span >$ {marketCap.toLocaleString()}</span>
        
            
        </div>
    );
};

export default Coin;