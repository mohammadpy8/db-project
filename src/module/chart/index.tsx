import { FC } from "react";
import { chartType } from "../../types/chartType/ChartType";
import { FaTimes } from "react-icons/fa";
import { LineChart, Line } from "recharts";

interface chart {
  setChart: any;
  chart: chartType;
}

const Chart: FC<chart> = ({ setChart, chart }) => {
  const data = [{ name: "Page A",  amt: 1 }, { name: "Page A",  amt: 50 }, { name: "Page A", uv: 700, pv: 1000, amt: 2400 }];
  console.log(chart.prices.slice(0, 20));

  return (
    <div className={chart ? `ModalFrist open` : `ModalFrist close`}>
      <div className="modal-background"></div>
      <div className="modal">
        <div className="flex justify-end mt-4 ml-[-20px]">
          <button onClick={() => setChart(false)}>
            <FaTimes size={25} />
          </button>
        </div>
        <LineChart width={400} height={400} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
      </div>
    </div>
  );
};

export default Chart;
