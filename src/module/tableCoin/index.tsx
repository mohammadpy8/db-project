import { FC } from "react";
import styles from "./Table.module.css";
import crypto from "../../types/cryptoType/CryptoType";

interface table {
  isLoading: boolean;
  currency: string;
  coins: crypto[];
}

const TableCoin: FC<table> = ({ isLoading, coins, currency }) => {
  const changeCurrency = (price: string) => {
    if (price === "usd") {
      return "$";
    } else if (price === "eur") {
      return "#";
    } else {
      return "*";
    }
  };
  return (
    <div className={styles.container}>
      {isLoading ? (
        <h1>loading..</h1>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <tr>
                <td>
                  <div className={styles.symbol}>
                    <img src={coin.image} alt={coin.id} />
                    <span>{coin.symbol.toUpperCase()}</span>
                  </div>
                </td>
                <td>{coin.name}</td>
                <td>
                  {changeCurrency(currency)}
                  {coin.current_price.toLocaleString()}
                </td>
                <td
                  className={coin.price_change_percentage_24h > 0 ? styles.success : styles.error}
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td>${coin.total_volume.toLocaleString()}</td>
                <td>
                  {/* <img src={price_change > 0 ? chartUp : chartDown} alt={id} /> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableCoin;
