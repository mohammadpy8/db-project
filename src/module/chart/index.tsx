import { FC, useState } from 'react'

import { FaTimes } from 'react-icons/fa'
import {
  LineChart,
  Line,
  ResponsiveContainer,
  YAxis,
  CartesianGrid,
  Tooltip,
  XAxis,
  Legend,
} from 'recharts'
import convertData from '../../shared/convertData'

interface chartTypes {
  prices: number[][]
  market_caps: number[][]
  total_volumes: number[][]
}

interface chart {
  setChart: any
  chart: number[][]
  setOpenChart: any
  openCharts: any
}

const Chart: FC<chart> = ({ setChart, chart, setOpenChart, openCharts }) => {
  const [type, setType] = useState<any>('prices')
  console.log(chart);
  
  console.log(convertData(chart, type))

  return (
    <div className={openCharts ? `ModalFrist open` : `ModalFrist close`}>
      <div className="modal-background"></div>
      <div className="modal">
        <div className="flex justify-end mt-4 ml-[-20px]">
          <button onClick={() => setOpenChart(false)}>
            <FaTimes size={25} />
          </button>
        </div>
        <div>
          {/* <img src={chart.coin.image} alt="image" />
          <p>{chart.coin.name}</p> */}
        </div>
        <div className="w-[760px] h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={400} height={400} data={convertData(chart, type)}>
              <Line
                type="monoton"
                dataKey={type}
                stroke="#3874ff"
                strokeWidth="2px"
              />
              <CartesianGrid stroke="#9d9d9d" />
              <YAxis
                dataKey={type}
                domain={['auto', 'auto']}
                stroke="#9d9d9d"
              />
              <XAxis dataKey="date" hide />
              <Legend />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default Chart
