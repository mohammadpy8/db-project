import { FC } from 'react'
import { FiBarChart2 } from 'react-icons/fi'
import ShowCoin from '../showCoin'
import { TbClipboardList } from 'react-icons/tb'

const PriceCrypto: FC = () => {
  return (
    <div className="mt-60 mb-24">
      <div className="flex items-center gap-x-2">
        <div>
          <FiBarChart2 size={30} color="#3051f8" />
        </div>
        <div>
          <h1 className="text-xl font-Yek-SemiBold pt-2">
            قیمت لحظه ای ارزدیجیتال
          </h1>
        </div>
      </div>
      <div>
        <ShowCoin />
      </div>
      <div className="flex justify-center">
        <button className="flex items-center gap-x-2 font-Yek-SemiBold text-primary-200 border-2 p-2 rounded-lg hover:opacity-70 transition-all duration-300">
          <TbClipboardList color="#193df3" size={30} />
          <span>لیست تمام ارزها</span>
        </button>
      </div>
    </div>
  )
}

export default PriceCrypto
