import React,{useEffect,useState} from 'react';

//CSS
import styles from './CoinData.module.css'

//API
import { getCoins } from '../services/api';

//gif
import loader from "../gif/spinner.gif"

//components
import Coin from './Coin';

const CoinData = () => {

const [coins,setCoins] = useState([])
const [search,setSearch] = useState("")

useEffect (() =>{

  const fetchApi = async () =>{
    const data = await getCoins();
    setCoins (data);
    
  }

  fetchApi()
},[])

const searchHandler = event => {
   setSearch (event.target.value);
}

const searchedCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))



    return (
        <>
        <input className={styles.input} type = "text" placeholder = "Search" value={search} onChange={searchHandler}/>
        <div className={styles.coinData}>
          {
              coins.length ?
              
               searchedCoins.map (coin => <Coin key={coin.id} 
                  
                 name={coin.name}
                 symbol={coin.symbol}
                 image={coin.image}
                 price={coin.current_price}
                 marketCap={coin.market_cap}
                 priceChange={coin.price_change_percentage_24h}
              
              />) 
               : <div><p>is loading...</p><img src = {loader} alt= "loading"/></div>
          }
        </div>
        </>
    );
};

export default CoinData;