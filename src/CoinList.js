import { useState, useEffect } from "react";

function CoinList() {
  const [loading, setLoading] = useState(true);
  const [coinList, setCoinList] = useState([]);
  const [coins, setCoins] = useState([]);
  const [coin, setCoin] = useState("");
  useEffect(() => {
    console.log("https://api.coinpaprika.com/v1/tickers");
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoinList(json);
        setCoins(json);
        setLoading(false);
      });
      console.log("first");
  }, []);
  const onChange = (e) => {
    const keyword = e.target.value.toUpperCase().replace(/ /gi, "");
    const keywords = keyword.split(",");
    console.log(keywords);

    let newArr = [];
    coinList.forEach(item => {
      if(keywords.includes(item.symbol.toUpperCase())){
        newArr.push(item);
      }
    });
    if(newArr.length == 0) newArr = coinList; 
    setCoins(newArr);
    console.log("coinList ", coinList.length);
    console.log("newArr", newArr);
    
    setCoin(e.target.value);
  };
  
  return (
    <div>
      <hr/>
      <h1>My COINS! {loading ? "" : `(${coins.length})`}</h1>
        <input type="text" value={coin} onChange={onChange} placeholder="What is your coin? (write with comma)" />
        <hr/>
        <ul>
          {coins.map((coin, index) => (
              <li key={coin.id}>{coin.name} ({coin.symbol}) {coin.quotes.USD ? coin.quotes.USD.price : ""} USD</li>
          ))}
        </ul>
    </div>
  );
}

export default CoinList;
