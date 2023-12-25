type numberOrNull = number | null;
type stringOrNull = string | null;

type crypto = {
  total_volume: numberOrNull;
  total_supply: numberOrNull;
  price_change_percentage_24h: numberOrNull;
  price_change_24h: numberOrNull;
  max_supply: numberOrNull;
  market_cap_rank: numberOrNull;
  market_cap_change_percentage_24h: numberOrNull;
  market_cap_change_24h: numberOrNull;
  market_cap: numberOrNull;
  low_24h: numberOrNull;
  high_24h: numberOrNull;
  fully_diluted_valuation: numberOrNull;
  current_price: numberOrNull;
  circulating_supply: numberOrNull;
  atl_change_percentage: numberOrNull;
  atl: numberOrNull;
  ath_change_percentage: numberOrNull;
  ath: numberOrNull;
  symbol: stringOrNull;
  name: stringOrNull;
  last_updated: stringOrNull;
  image: stringOrNull;
  id: stringOrNull;
  atl_date: stringOrNull;
  ath_date: stringOrNull;
  roi: null | {
    time: numberOrNull;
    currency: stringOrNull;
    percentage: numberOrNull;
  };
};

export default crypto;
