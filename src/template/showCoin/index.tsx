import { FC, useState, useEffect } from "react";
import { getCoinList } from "../../services/cryptoApi";
import crypto from "../../types/cryptoType/CryptoType";

const ShowCoin: FC = () => {
  const [coins, setCoins] = useState<crypto[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [currency, setCurrency] = useState<string>("usd");

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const res = await fetch(getCoinList(page, currency));
        const json = await res.json() as crypto[];
        setCoins(json);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
    window.scrollTo(0, 0);
  }, [page, currency]);

  console.log(coins);

  return <div></div>;
};

export default ShowCoin;
