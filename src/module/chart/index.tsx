import { FC } from 'react'
import { chartType } from '../../types/chartType/ChartType'

interface chart {
  setChart: any
  chart: chartType
}

const Chart: FC<chart> = ({ setChart, chart }) => {
    console.log(chart.market_caps);
    
  return (
    <div className={chart ? `ModalFrist open` : `ModalFrist close`}>
    <div className="modal-background"></div>
          <div className="modal">
              
    </div>
  </div>
  )
}

export default Chart
