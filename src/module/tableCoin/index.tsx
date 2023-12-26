import { FC } from 'react'
import crypto from '../../types/cryptoType/CryptoType'
import numberConvertToPersian from '../../shared/numberConvertToPersian'
import { FiBarChart2 } from 'react-icons/fi'
import { marketChart } from '../../services/cryptoApi'

interface table {
  isLoading?: boolean
  currency: string
  coins: crypto[]
  setChart: any
}

const TableCoin: FC<table> = ({ isLoading, coins, currency, setChart }) => {
  const changeCurrency = (price: string) => {
    if (price === 'usd') {
      return '$'
    } else if (price === 'eur') {
      return '#'
    } else {
      return '*'
    }
  }

  const randomPhoto = (priceCoin: number) => {
    if (priceCoin > 0 && priceCoin < 3) {
      return 'https://kifpool.me/ui_v2/charts/green/green-1.svg'
    } else if (priceCoin >= 3 && priceCoin < 5) {
      return 'https://kifpool.me/ui_v2/charts/green/green-10.svg'
    } else if (priceCoin >= 5) {
      return 'https://kifpool.me/ui_v2/charts/green/green-9.svg'
    } else if (priceCoin < 0) {
      return 'https://kifpool.me/ui_v2/charts/red/red-2.svg'
    } else if (priceCoin <= -1 && priceCoin <= -3) {
      return 'https://kifpool.me/ui_v2/charts/red/red-3.svg'
    } else if (priceCoin < -4) {
      return 'https://kifpool.me/ui_v2/charts/red/red-2.svg'
    }
  }

  const colorRandom = (index: number) => {
    if (index % 2 === 0) {
      return '#fff'
    } else if (index % 2 === 1) {
      return '#f4f6ff;'
    }
  }

  // const showHandler = async (id: string) => {
  //   setChart(true)
  //   try {
  //     const res = await fetch(marketChart(id));
  //     const json = res.json();
  //     setChart(json)
  //   } catch (error) {
  //     setChart(null)
  //   }
  // };

  return (
    <div className="mt-8 mb-8 rounded-2xl relative z-0 border-[1px] border-[#f0f3ff]">
      {isLoading ? (
        <h1>loading..</h1>
      ) : (
        <table className="w-full rounded-xl m-auto border-collapse border-spacing-0 overflow-hidden font-Yek-SemiBold">
          <thead className="rounded-2xl h-16 bg-[#f0f3ff] font-Yek-Bold text-gray-700">
            <tr className="TH">
              <th></th>
              <th>ارز</th>
              <th>قیمت(دلار)</th>
              <th>تغییرات</th>
              <th>قیمت اصلی(دلار)</th>
              <th>نمودار</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.slice(0,10).map((coin, index) => (
              <tr
                className="TD hover:bg-gray-100 hover:scale-105 transition-all duration-500"
                style={{
                  backgroundColor: colorRandom(index),
                }}
              >
                <td>
                  <div className="flex flex-col items-center gap-y-2">
                    <img src={coin.image} alt={coin.id} className="w-8 h-8" />
                    <span className="text-[15px] font-Yek-Bold">
                      {coin.symbol.toUpperCase()}
                    </span>
                  </div>
                </td>
                <td>{coin.name}</td>
                <td>
                  {changeCurrency(currency)}
                  {numberConvertToPersian(coin.current_price.toLocaleString())}
                </td>
                <td
                  className={
                    coin.price_change_percentage_24h > 0
                      ? 'text-green-500'
                      : 'text-red-600'
                  }
                >
                  {numberConvertToPersian(
                    coin.price_change_percentage_24h.toFixed(2),
                  )}
                  %
                </td>
                <td>
                  ${numberConvertToPersian(coin.total_volume.toLocaleString())}
                </td>
                <td>
                  <img
                    src={randomPhoto(coin.price_change_percentage_24h)}
                    alt={coin.name}
                    className="w-28"
                  />
                </td>
                <td>
                  <button className="border-2 p-2 rounded-lg" onClick={async() => {
                        setChart(true)
                        try {
                          const res = await fetch(marketChart(coin.id));
                          const json = await res.json();
                          setChart(json)
                        } catch (error) {
                          setChart(null)
                        }
                  }}>
                    <FiBarChart2 size={30} color="#3051f8" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default TableCoin
