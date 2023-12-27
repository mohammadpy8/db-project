import { FC, useState } from "react";

import { FaTimes } from "react-icons/fa";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  YAxis,
  CartesianGrid,
  Tooltip,
  XAxis,
  Legend,
} from "recharts";
import convertData from "../../shared/convertData";

interface ChartTypes {
  prices: number[][];
  market_caps: number[][];
  total_volumes: number[][];
}

interface Chart {
  setChart: any;
  chart: number[][];
  setOpenChart: any;
  openCharts: any;
}

const Chart: FC<Chart> = ({ setChart, chart, setOpenChart, openCharts }) => {
  const [type, setType] = useState<any>("prices");
  console.log(chart);

  console.log(convertData(chart, type));

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
        <div className="w-[760px] h-[300px] mt-6 px-auto">
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
                domain={["auto", "auto"]}
                stroke="#9d9d9d"
              />
              <XAxis dataKey="date" hide />
              <Legend />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex mt-5 gap-x-6 text-lg font-Yek-Bold items-center">
          <div>
            <h1>نمایش نمودار براساس :</h1>
          </div>
          <div>
            <button
              onClick={() => setType("prices")}
              className={
                type === "prices"
                  ? "bg-primary-200 w-24 h-12 rounded-xl transition-all duration-300 border-none"
                  : "border-2 w-24 h-12 rounded-xl border-primary-200 text-primary-200 transition-colors duration-500"
              }
            >
              قیمت
            </button>
          </div>
          <div>
            <button
              onClick={() => setType("market_caps")}
              className={
                type === "market_caps"
                  ? "bg-primary-200 w-24 h-12 rounded-xl transition-all duration-300 border-none"
                  : "border-2 w-24 h-12 rounded-xl border-primary-200 text-primary-200 transition-colors duration-500"
              }
            >
              مارکت کپ
            </button>
          </div>
          <div>
            <button
              onClick={() => setType("total_volumes")}
              className={
                type === "total_volumes"
                  ? "bg-primary-200 w-24 h-12 rounded-xl transition-all duration-300 border-none"
                  : "border-2 w-24 h-12 rounded-xl border-primary-200 text-primary-200 transition-colors duration-500"
              }
            >
              ارزش کلی
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
