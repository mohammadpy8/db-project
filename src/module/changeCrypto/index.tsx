import { FC, useEffect, useState } from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'
import { FaArrowDownLong } from 'react-icons/fa6'
import BTCIcon from '../../assets/images/bitcoin.png'
import IRIIcon from '../../assets/images/iran.png'

const ChangeCrypto: FC = () => {
  const [BTCPrice, setBTCPrice] = useState<number>(2203001816)
  const [dollor, setDolollor] = useState<number>(43883)
  const [priceIRI, setPriceIRI] = useState<string | number>('')
  const [BTCValue, setBTCValue] = useState<number | string>('')

  useEffect(() => {
    const SumationPrice = () => {
      const formola = +BTCValue * dollor * 50000
      setPriceIRI(formola)
    }

    SumationPrice()
  }, [BTCValue])

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBTCValue(event.target.value)
  }

  const showText = () => {
    if (priceIRI.toString().length === 0) {
      return ''
    } else {
      return priceIRI.toLocaleString()
    }
  }

  return (
    <div className="mt-12 mr-8 group">
      <div className="w-[500px] h-[500px] change-crypto rounded-full circleCahnge relative transition-all duration-300 group-hover:scale-110 group-hover:opacity-15"></div>
      <div className="w-[400px] h-[430px]  bg-white rounded-lg shadow-lg absolute top-40 left-48 group-hover:scale-105 transition-all duration-300 group-hover:opacity-100">
        <div className="flex flex-col px-5">
          <div className="bg-[#f3f3f3] w-[360px] h-[70px] mt-5 rounded-xl flex justify-between font-Yek-SemiBold p-2">
            <div className="flex items-center gap-x-2 bg-white px-14 rounded-xl shadow-lg">
              <FaArrowUpLong />
              <button>خرید</button>
            </div>
            <div className="flex items-center gap-x-2 px-14">
              <FaArrowDownLong />
              <button>فروش</button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white text-[12px] font-Yek-Regular absolute top-6 right-4">
              <label>مقدار زیر را می گیرد</label>
            </div>
            <div className="border-2 w-[360px] py-4 px-2 rounded-xl mt-8 flex justify-between">
              <div>
                <input
                  type="text"
                  placeholder="تعداد را وارد کنید"
                  className="w-[250px] outline-none"
                  value={BTCValue}
                  onChange={changeHandler}
                />
              </div>
              <div className="flex gap-x-2 items-center">
                <h1 className="font-Yek-Bold text-lg">BTC</h1>
                <img src={BTCIcon} alt="btcicon" className="w-8 h-8" />
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white text-[12px] font-Yek-Regular absolute top-6 right-4">
              <label>مقدار زیر را می دهید</label>
            </div>
            <div className="border-2 w-[360px] py-4 px-2 rounded-xl mt-8 flex justify-between">
              <div>
                <input
                  type="text"
                  placeholder="قیمت نهایی"
                  className="w-[250px] outline-none"
                  value={showText()}
                />
              </div>
              <div className="flex gap-x-2 items-center">
                <h1 className="font-Yek-Bold text-lg">IRI</h1>
                <img src={IRIIcon} alt="iriicon" className="w-8 h-8" />
              </div>
            </div>
          </div>
          <div className="mt-3 flex flex-col gap-y-2">
            <div>
              <h1 className="font-Yek-Bold text-sm">قیمت روز بیت کوین</h1>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-x-1 items-center">
                <div>
                  <h1 className="text-primary-300 font-Yek-Bold text-xl">
                    {BTCPrice.toLocaleString()}
                  </h1>
                </div>
                <div>
                  <span className="text-gray-500 font-Yek-SemiBold">تومان</span>
                </div>
              </div>
              <div>
                <h1 className="text-2xl text-gray-600 font-Yek-Bold">
                  ${dollor.toLocaleString()}
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full bg-primary-200 flex justify-center py-2 rounded-lg btn-shine mt-2">
            <div>
              <button className="text-white font-Yek-Regular">
                خرید بیت کوین
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChangeCrypto
