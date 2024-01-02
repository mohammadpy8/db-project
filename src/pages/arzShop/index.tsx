import { FC, useState } from 'react'
import { TbShoppingCartDollar } from 'react-icons/tb'
import numberConvertToPersian from '../../shared/numberConvertToPersian'
import images from '../../assets/images/btcc.avif'
import { FaLongArrowAltLeft, FaPlus } from 'react-icons/fa'
import ArzIcon from '../../assets/images/shopi.webp'

const ArzShop: FC = () => {
  const [arzCount, setArzCount] = useState<number>(12)
  const [arzTotal, setTotal] = useState<number>(1500)
  const [arzOffer, setArzOffer] = useState<number>(10)
  const [arzPrice, setArzPrice] = useState<number>(165820888550)

  return (
    <div className="container mt-6">
      <div className="flex justify-between">
        <div className="space-y-4 px-4 py-2">
          <div className='flex gap-x-2 items-center'>
            <img src={ArzIcon} alt="arz" className='w-16' />
            <h1 className="text-5xl text-primary-300 font-Yek-ExtraBlack">
              خرید ارز
            </h1>
          </div>
          <div>
            <span className="text-2xl font-Yek-ExtraBlack">
              خرید انواع ارز در فروشگاه ارز دیجیتال ایرانیان
            </span>
          </div>
        </div>
        <div>
          <div className="bg-primary-400 pl-2 pr-4 py-2 flex items-center gap-x-2 rounded-lg relative shadow-lg">
            <h1 className="text-lg text-white font-Yek-ExtraBlack">سبد خرید</h1>
            <button>
              <TbShoppingCartDollar color="#fff" size={45} />
            </button>
            <span className="absolute top-2 left-11 bg-red-600 rounded-full w-5 h-5 flex items-center justify-center text-center text-md text-white font-Yek-ExtraBold">
              {numberConvertToPersian(arzCount)}
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-8">
        <div>
          <div className="flex items-center gap-x-2">
            <h1 className="text-xl font-Yek-ExtraBlack">مرتب سازی براساس:</h1>
            <div className="bg-gray-200 flex gap-x-12 text-xl px-8 py-4 rounded-lg shadow-md font-Yek-ExtraBlack">
              <div>ارزان ترین</div>
              <div>گران ترین</div>
              <div> باتخفیف</div>
            </div>
          </div>
        </div>
        <div className="w-[55%] relative">
          <input
            className="w-full outline-none border-2 border-gray-300  border-solid transition-all focus:border-primary-300  placeholder:text-gray-400 placeholder:select-none text-lg py-3 rounded-xl placeholder:text-right pr-12 pl-3 bg-white font-Yek-SemiBold"
            placeholder="جست و جو در میان ارز ها..."
            type="text"
          />
          <span className="flex justify-center items-center absolute top-1/2 -translate-y-1/2 border-solid transition-all border-cnBlack-10 dark:border-gray-300 pl-2 right-3 border-l-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="transition-all w-5 h-5 md:w-6 md:h-6 text-cnBlack-10 dark:text-gray-300"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              ></path>
            </svg>
          </span>
        </div>
      </div>
      <div className="flex gap-x-2 text-lg mt-8 text-gray-700 font-Yek-Bold border-b-4 border-gray-400 w-[150px]">
        <h1>تعداد کل:</h1>
        <span>{numberConvertToPersian(arzTotal)}</span>
      </div>
      <div className="mt-32 flex flex-wrap gap-x-24 gap-y-[135px] mx-10">
        <div className=" w-[350px] rounded-2xl  relative cardArz">
          <div className="absolute top-[-110px] left-4 bg-red-600 flex text-white px-2 text-lg font-Yek-ExtraBold text-center rounded-xl z-10">
            <h1>{numberConvertToPersian(arzOffer)}</h1>
            <span>%</span>
          </div>
          <div>
            <img
              src={images}
              alt="images"
              className="w-[300px] h-56 object-cover rounded-xl absolute top-[-100px] right-5 z-0"
            />
          </div>
          <div className="flex gap-x-4 p-3 mt-32">
            <div className="bg-green-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
              <span>ارز دیجیتال</span>
            </div>
            <div className="bg-red-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
              <span>بیت کوین</span>
            </div>
          </div>
          <div className="flex gap-x-2 mr-4 text-xl font-Yek-ExtraBlack text-white">
            <h1>ارز:</h1>
            <span>ارز بیت کوین</span>
          </div>
          <div className="flex gap-x-2 mr-4 my-2">
            <h1 className="text-lg font-Yek-ExtraBlack">قیمت دلاری:</h1>
            <span className="text-lg font-Yek-ExtraBold text-white">
              ${numberConvertToPersian(arzPrice.toLocaleString())}
            </span>
          </div>
          <div className="flex gap-x-2 mr-4 text-md font-Yek-SemiBold text-gray-200 mt-4">
            <h1>عرضه کننده:</h1>
            <span>محمد سیف الهی</span>
          </div>

          <div className="flex justify-center mt-6 mb-4">
            <button className="flex border-[3px] border-white rounded-lg px-2 py-2 items-center">
              <span className="text-white text-lg font-Yek-ExtraBlack">
                افزودن به سبد خرید
              </span>
              <TbShoppingCartDollar color="#fff" size={35} />
            </button>
          </div>
          <div className="flex items-center justify-center mb-8">
            <button className="flex bg-primary-300 rounded-lg px-2 py-2 items-center gap-x-2">
              <span className="text-lg text-white font-Yek-ExtraBold">
                توضیحات و خرید ارز
              </span>
              <FaLongArrowAltLeft color="#fff" size={25} />
            </button>
          </div>
        </div>
        <div className=" w-[350px] rounded-2xl  relative cardArz">
          <div className="absolute top-[-110px] left-4 bg-red-600 flex text-white px-2 text-lg font-Yek-ExtraBold text-center rounded-xl z-10">
            <h1>{numberConvertToPersian(arzOffer)}</h1>
            <span>%</span>
          </div>
          <div>
            <img
              src={images}
              alt="images"
              className="w-[300px] h-56 object-cover rounded-xl absolute top-[-100px] right-5 z-0"
            />
          </div>
          <div className="flex gap-x-4 p-3 mt-32">
            <div className="bg-green-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
              <span>ارز دیجیتال</span>
            </div>
            <div className="bg-red-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
              <span>بیت کوین</span>
            </div>
          </div>
          <div className="flex gap-x-2 mr-4 text-xl font-Yek-ExtraBlack text-white">
            <h1>ارز:</h1>
            <span>ارز بیت کوین</span>
          </div>
          <div className="flex gap-x-2 mr-4 my-2">
            <h1 className="text-lg font-Yek-ExtraBlack">قیمت دلاری:</h1>
            <span className="text-lg font-Yek-ExtraBold text-white">
              ${numberConvertToPersian(arzPrice.toLocaleString())}
            </span>
          </div>
          <div className="flex gap-x-2 mr-4 text-md font-Yek-SemiBold text-gray-200 mt-4">
            <h1>عرضه کننده:</h1>
            <span>محمد سیف الهی</span>
          </div>

          <div className="flex justify-center mt-6 mb-4">
            <button className="flex border-[3px] border-white rounded-lg px-2 py-2 items-center">
              <span className="text-white text-lg font-Yek-ExtraBlack">
                افزودن به سبد خرید
              </span>
              <TbShoppingCartDollar color="#fff" size={35} />
            </button>
          </div>
          <div className="flex items-center justify-center mb-8">
            <button className="flex bg-primary-300 rounded-lg px-2 py-2 items-center gap-x-2">
              <span className="text-lg text-white font-Yek-ExtraBold">
                توضیحات و خرید ارز
              </span>
              <FaLongArrowAltLeft color="#fff" size={25} />
            </button>
          </div>
        </div>
        <div className=" w-[350px] rounded-2xl  relative cardArz">
          <div className="absolute top-[-110px] left-4 bg-red-600 flex text-white px-2 text-lg font-Yek-ExtraBold text-center rounded-xl z-10">
            <h1>{numberConvertToPersian(arzOffer)}</h1>
            <span>%</span>
          </div>
          <div>
            <img
              src={images}
              alt="images"
              className="w-[300px] h-56 object-cover rounded-xl absolute top-[-100px] right-5 z-0"
            />
          </div>
          <div className="flex gap-x-4 p-3 mt-32">
            <div className="bg-green-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
              <span>ارز دیجیتال</span>
            </div>
            <div className="bg-red-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
              <span>بیت کوین</span>
            </div>
          </div>
          <div className="flex gap-x-2 mr-4 text-xl font-Yek-ExtraBlack text-white">
            <h1>ارز:</h1>
            <span>ارز بیت کوین</span>
          </div>
          <div className="flex gap-x-2 mr-4 my-2">
            <h1 className="text-lg font-Yek-ExtraBlack">قیمت دلاری:</h1>
            <span className="text-lg font-Yek-ExtraBold text-white">
              ${numberConvertToPersian(arzPrice.toLocaleString())}
            </span>
          </div>
          <div className="flex gap-x-2 mr-4 text-md font-Yek-SemiBold text-gray-200 mt-4">
            <h1>عرضه کننده:</h1>
            <span>محمد سیف الهی</span>
          </div>

          <div className="flex justify-center mt-6 mb-4">
            <button className="flex border-[3px] border-white rounded-lg px-2 py-2 items-center">
              <span className="text-white text-lg font-Yek-ExtraBlack">
                افزودن به سبد خرید
              </span>
              <TbShoppingCartDollar color="#fff" size={35} />
            </button>
          </div>
          <div className="flex items-center justify-center mb-8">
            <button className="flex bg-primary-300 rounded-lg px-2 py-2 items-center gap-x-2">
              <span className="text-lg text-white font-Yek-ExtraBold">
                توضیحات و خرید ارز
              </span>
              <FaLongArrowAltLeft color="#fff" size={25} />
            </button>
          </div>
        </div>
        <div className=" w-[350px] rounded-2xl  relative cardArz">
          <div className="absolute top-[-110px] left-4 bg-red-600 flex text-white px-2 text-lg font-Yek-ExtraBold text-center rounded-xl z-10">
            <h1>{numberConvertToPersian(arzOffer)}</h1>
            <span>%</span>
          </div>
          <div>
            <img
              src={images}
              alt="images"
              className="w-[300px] h-56 object-cover rounded-xl absolute top-[-100px] right-5 z-0"
            />
          </div>
          <div className="flex gap-x-4 p-3 mt-32">
            <div className="bg-green-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
              <span>ارز دیجیتال</span>
            </div>
            <div className="bg-red-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
              <span>بیت کوین</span>
            </div>
          </div>
          <div className="flex gap-x-2 mr-4 text-xl font-Yek-ExtraBlack text-white">
            <h1>ارز:</h1>
            <span>ارز بیت کوین</span>
          </div>
          <div className="flex gap-x-2 mr-4 my-2">
            <h1 className="text-lg font-Yek-ExtraBlack">قیمت دلاری:</h1>
            <span className="text-lg font-Yek-ExtraBold text-white">
              ${numberConvertToPersian(arzPrice.toLocaleString())}
            </span>
          </div>
          <div className="flex gap-x-2 mr-4 text-md font-Yek-SemiBold text-gray-200 mt-4">
            <h1>عرضه کننده:</h1>
            <span>محمد سیف الهی</span>
          </div>

          <div className="flex justify-center mt-6 mb-4">
            <button className="flex border-[3px] border-white rounded-lg px-2 py-2 items-center">
              <span className="text-white text-lg font-Yek-ExtraBlack">
                افزودن به سبد خرید
              </span>
              <TbShoppingCartDollar color="#fff" size={35} />
            </button>
          </div>
          <div className="flex items-center justify-center mb-8">
            <button className="flex bg-primary-300 rounded-lg px-2 py-2 items-center gap-x-2">
              <span className="text-lg text-white font-Yek-ExtraBold">
                توضیحات و خرید ارز
              </span>
              <FaLongArrowAltLeft color="#fff" size={25} />
            </button>
          </div>
        </div>
        <div className=" w-[350px] rounded-2xl  relative cardArz">
          <div className="absolute top-[-110px] left-4 bg-red-600 flex text-white px-2 text-lg font-Yek-ExtraBold text-center rounded-xl z-10">
            <h1>{numberConvertToPersian(arzOffer)}</h1>
            <span>%</span>
          </div>
          <div>
            <img
              src={images}
              alt="images"
              className="w-[300px] h-56 object-cover rounded-xl absolute top-[-100px] right-5 z-0"
            />
          </div>
          <div className="flex gap-x-4 p-3 mt-32">
            <div className="bg-green-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
              <span>ارز دیجیتال</span>
            </div>
            <div className="bg-red-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
              <span>بیت کوین</span>
            </div>
          </div>
          <div className="flex gap-x-2 mr-4 text-xl font-Yek-ExtraBlack text-white">
            <h1>ارز:</h1>
            <span>ارز بیت کوین</span>
          </div>
          <div className="flex gap-x-2 mr-4 my-2">
            <h1 className="text-lg font-Yek-ExtraBlack">قیمت دلاری:</h1>
            <span className="text-lg font-Yek-ExtraBold text-white">
              ${numberConvertToPersian(arzPrice.toLocaleString())}
            </span>
          </div>
          <div className="flex gap-x-2 mr-4 text-md font-Yek-SemiBold text-gray-200 mt-4">
            <h1>عرضه کننده:</h1>
            <span>محمد سیف الهی</span>
          </div>

          <div className="flex justify-center mt-6 mb-4">
            <button className="flex border-[3px] border-white rounded-lg px-2 py-2 items-center">
              <span className="text-white text-lg font-Yek-ExtraBlack">
                افزودن به سبد خرید
              </span>
              <TbShoppingCartDollar color="#fff" size={35} />
            </button>
          </div>
          <div className="flex items-center justify-center mb-8">
            <button className="flex bg-primary-300 rounded-lg px-2 py-2 items-center gap-x-2">
              <span className="text-lg text-white font-Yek-ExtraBold">
                توضیحات و خرید ارز
              </span>
              <FaLongArrowAltLeft color="#fff" size={25} />
            </button>
          </div>
        </div>
        <div className=" w-[350px] rounded-2xl  relative cardArz">
          <div className="absolute top-[-110px] left-4 bg-red-600 flex text-white px-2 text-lg font-Yek-ExtraBold text-center rounded-xl z-10">
            <h1>{numberConvertToPersian(arzOffer)}</h1>
            <span>%</span>
          </div>
          <div>
            <img
              src={images}
              alt="images"
              className="w-[300px] h-56 object-cover rounded-xl absolute top-[-100px] right-5 z-0"
            />
          </div>
          <div className="flex gap-x-4 p-3 mt-32">
            <div className="bg-green-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
              <span>ارز دیجیتال</span>
            </div>
            <div className="bg-red-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
              <span>بیت کوین</span>
            </div>
          </div>
          <div className="flex gap-x-2 mr-4 text-xl font-Yek-ExtraBlack text-white">
            <h1>ارز:</h1>
            <span>ارز بیت کوین</span>
          </div>
          <div className="flex gap-x-2 mr-4 my-2">
            <h1 className="text-lg font-Yek-ExtraBlack">قیمت دلاری:</h1>
            <span className="text-lg font-Yek-ExtraBold text-white">
              ${numberConvertToPersian(arzPrice.toLocaleString())}
            </span>
          </div>
          <div className="flex gap-x-2 mr-4 text-md font-Yek-SemiBold text-gray-200 mt-4">
            <h1>عرضه کننده:</h1>
            <span>محمد سیف الهی</span>
          </div>

          <div className="flex justify-center mt-6 mb-4">
            <button className="flex border-[3px] border-white rounded-lg px-2 py-2 items-center">
              <span className="text-white text-lg font-Yek-ExtraBlack">
                افزودن به سبد خرید
              </span>
              <TbShoppingCartDollar color="#fff" size={35} />
            </button>
          </div>
          <div className="flex items-center justify-center mb-8">
            <button className="flex bg-primary-300 rounded-lg px-2 py-2 items-center gap-x-2">
              <span className="text-lg text-white font-Yek-ExtraBold">
                توضیحات و خرید ارز
              </span>
              <FaLongArrowAltLeft color="#fff" size={25} />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10 pb-10">
        <button className="bg-primary-400 flex text-white items-center gap-x-2 p-2 rounded-lg shadow-2xl">
          <span className="text-lg font-Yek-ExtraBold">محصولات بیشتر</span>
          <FaPlus color="#fff" size={15} />
        </button>
      </div>
    </div>
  )
}

export default ArzShop
