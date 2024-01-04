import { FC, useState } from 'react'
import InfoMasterCart from '../../template/infoMasterCart'
import MasterIcon from '../../assets/images/shopi.webp'
import { TbShoppingCartDollar } from 'react-icons/tb'
import numberConvertToPersian from '../../shared/numberConvertToPersian'
import { Link } from 'react-router-dom'
import { FaLongArrowAltLeft, FaCcMastercard } from 'react-icons/fa'
import images from '../../assets/images/preview.png'
import { GiMoneyStack } from "react-icons/gi";
import { SiUnitednations } from "react-icons/si";
import { RxTimer } from "react-icons/rx";
import { FaPlus } from 'react-icons/fa6'

const MasterShop: FC = () => {
  const [arzCount, setArzCount] = useState<number>(20)
  const [masterOffer, setMasterOffer] = useState<number>(20)
  const [masterPrice, setMasterPrice] = useState<number>(165000000)

  return (
    <div className="container MasterPhoto">
      <InfoMasterCart />
      <div className="flex justify-between">
        <div>
          <div className="mt-16 flex items-center">
            <img src={MasterIcon} alt="master" className="w-24" />
            <h1 className="text-5xl font-Yek-ExtraBlack text-primary-400">
              مستر کارت
            </h1>
          </div>
          <div className="mt-4 text-3xl font-Yek-ExtraBlack mr-4">
            <h1>معتبر ترین مستر کارت ها را از ما بخواهید</h1>
          </div>
        </div>
        <div>
          <Link to="/cart">
            <div className="bg-primary-400 pl-2 pr-4 py-2 flex items-center gap-x-2 rounded-lg relative shadow-lg mt-20 hover:ring-[7px] transition-all duration-300 cursor-pointer">
              <h1 className="text-lg text-white font-Yek-ExtraBlack">
                سبد خرید
              </h1>
              <button>
                <TbShoppingCartDollar color="#fff" size={45} />
              </button>
              <span className="absolute top-2 left-11 bg-red-600 rounded-full w-5 h-5 flex items-center justify-center text-center text-md text-white font-Yek-ExtraBold">
                {numberConvertToPersian(arzCount)}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex justify-between items-center mt-12 mr-4">
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
            placeholder="جست و جو در میان مستر کارت..."
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
      <div className="mt-40 flex flex-wrap gap-x-24 gap-y-[170px] mx-10">
        <div className=" w-[350px] rounded-2xl h-[390px]  relative master_Cart">
          <div className="absolute top-[-110px] left-4 bg-red-600 flex text-white px-2 text-lg font-Yek-ExtraBold text-center rounded-xl z-10">
            <h1>{numberConvertToPersian(masterOffer)}</h1>
            <span>%</span>
          </div>
          <div className="rounded-xl">
            <img
              src={images}
              alt="images"
              className="w-[300px] h-56 object-fill rounded-xl absolute top-[-100px] right-5 z-0"
            />
          </div>
          <div className="flex gap-x-4 p-3 mt-32">
            <div className="bg-blue-700 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
              <span>مستر کارت</span>
            </div>
            <div className="bg-red-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
              <span>آمریکا</span>
            </div>
          </div>
          <div className="flex gap-x-2 items-center mr-4 text-xl font-Yek-ExtraBlack text-white">
            <FaCcMastercard size={30} />
            <h1>مسترکارت:</h1>
            <span>مستر کارت آمریکا</span>
          </div>
          <div className="flex gap-x-2 mr-4 my-4">
            <GiMoneyStack size={30} color="#fff"/>
            <h1 className="text-xl font-Yek-ExtraBlack text-white">قیمت :</h1>
            <span className="text-xl font-Yek-ExtraBlack text-red-700 border-b-4 border-red-700">
              {numberConvertToPersian(masterPrice.toLocaleString())}تومان
            </span>
          </div>
          <div className="flex gap-x-2 mr-4 text-xl font-Yek-ExtraBlack text-white mt-4">
            <SiUnitednations size={30} />
            <h1>کشور:</h1>
            <span>آمریکا</span>
          </div>
          <div className="flex gap-x-2 mr-4 text-xl font-Yek-ExtraBlack text-white mt-4">
            <RxTimer size={30} />
            <h1>اعتبار:</h1>
            <span>سه سال</span>
          </div>
          <div className="flex items-center justify-center mb-8 absolute -bottom-16 right-14">
            <button className="flex bg-[#4c20ff] rounded-lg px-2 py-4 items-center gap-x-2 hover:ring-[7px] ring-[#b5a3ff] transition-all duration-300">
              <span className="text-lg text-white font-Yek-ExtraBlack">
                توضیحات و خرید مسترکارت
              </span>
              <FaLongArrowAltLeft color="#fff" size={25} />
            </button>
          </div>
        </div>
        <div className=" w-[350px] rounded-2xl h-[390px]  relative master_Cart">
          <div className="absolute top-[-110px] left-4 bg-red-600 flex text-white px-2 text-lg font-Yek-ExtraBold text-center rounded-xl z-10">
            <h1>{numberConvertToPersian(masterOffer)}</h1>
            <span>%</span>
          </div>
          <div className="rounded-xl">
            <img
              src={images}
              alt="images"
              className="w-[300px] h-56 object-fill rounded-xl absolute top-[-100px] right-5 z-0"
            />
          </div>
          <div className="flex gap-x-4 p-3 mt-32">
            <div className="bg-blue-700 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
              <span>مستر کارت</span>
            </div>
            <div className="bg-red-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
              <span>آمریکا</span>
            </div>
          </div>
          <div className="flex gap-x-2 items-center mr-4 text-xl font-Yek-ExtraBlack text-white">
            <FaCcMastercard size={30} />
            <h1>مسترکارت:</h1>
            <span>مستر کارت آمریکا</span>
          </div>
          <div className="flex gap-x-2 mr-4 my-4">
            <GiMoneyStack size={30} color="#fff"/>
            <h1 className="text-xl font-Yek-ExtraBlack text-white">قیمت :</h1>
            <span className="text-xl font-Yek-ExtraBlack text-red-700 border-b-4 border-red-700">
              {numberConvertToPersian(masterPrice.toLocaleString())}تومان
            </span>
          </div>
          <div className="flex gap-x-2 mr-4 text-xl font-Yek-ExtraBlack text-white mt-4">
            <SiUnitednations size={30} />
            <h1>کشور:</h1>
            <span>آمریکا</span>
          </div>
          <div className="flex gap-x-2 mr-4 text-xl font-Yek-ExtraBlack text-white mt-4">
            <RxTimer size={30} />
            <h1>اعتبار:</h1>
            <span>سه سال</span>
          </div>
          <div className="flex items-center justify-center mb-8 absolute -bottom-16 right-14">
            <button className="flex bg-[#4c20ff] rounded-lg px-2 py-4 items-center gap-x-2 hover:ring-[7px] ring-[#b5a3ff] transition-all duration-300">
              <span className="text-lg text-white font-Yek-ExtraBlack">
                توضیحات و خرید مسترکارت
              </span>
              <FaLongArrowAltLeft color="#fff" size={25} />
            </button>
          </div>
        </div>
        <div className=" w-[350px] rounded-2xl h-[390px]  relative master_Cart">
          <div className="absolute top-[-110px] left-4 bg-red-600 flex text-white px-2 text-lg font-Yek-ExtraBold text-center rounded-xl z-10">
            <h1>{numberConvertToPersian(masterOffer)}</h1>
            <span>%</span>
          </div>
          <div className="rounded-xl">
            <img
              src={images}
              alt="images"
              className="w-[300px] h-56 object-fill rounded-xl absolute top-[-100px] right-5 z-0"
            />
          </div>
          <div className="flex gap-x-4 p-3 mt-32">
            <div className="bg-blue-700 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
              <span>مستر کارت</span>
            </div>
            <div className="bg-red-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
              <span>آمریکا</span>
            </div>
          </div>
          <div className="flex gap-x-2 items-center mr-4 text-xl font-Yek-ExtraBlack text-white">
            <FaCcMastercard size={30} />
            <h1>مسترکارت:</h1>
            <span>مستر کارت آمریکا</span>
          </div>
          <div className="flex gap-x-2 mr-4 my-4">
            <GiMoneyStack size={30} color="#fff"/>
            <h1 className="text-xl font-Yek-ExtraBlack text-white">قیمت :</h1>
            <span className="text-xl font-Yek-ExtraBlack text-red-700 border-b-4 border-red-700">
              {numberConvertToPersian(masterPrice.toLocaleString())}تومان
            </span>
          </div>
          <div className="flex gap-x-2 mr-4 text-xl font-Yek-ExtraBlack text-white mt-4">
            <SiUnitednations size={30} />
            <h1>کشور:</h1>
            <span>آمریکا</span>
          </div>
          <div className="flex gap-x-2 mr-4 text-xl font-Yek-ExtraBlack text-white mt-4">
            <RxTimer size={30} />
            <h1>اعتبار:</h1>
            <span>سه سال</span>
          </div>
          <div className="flex items-center justify-center mb-8 absolute -bottom-16 right-14">
            <button className="flex bg-[#4c20ff] rounded-lg px-2 py-4 items-center gap-x-2 hover:ring-[7px] ring-[#b5a3ff] transition-all duration-300">
              <span className="text-lg text-white font-Yek-ExtraBlack">
                توضیحات و خرید مسترکارت
              </span>
              <FaLongArrowAltLeft color="#fff" size={25} />
            </button>
          </div>
        </div>
        <div className=" w-[350px] rounded-2xl h-[390px]  relative master_Cart">
          <div className="absolute top-[-110px] left-4 bg-red-600 flex text-white px-2 text-lg font-Yek-ExtraBold text-center rounded-xl z-10">
            <h1>{numberConvertToPersian(masterOffer)}</h1>
            <span>%</span>
          </div>
          <div className="rounded-xl">
            <img
              src={images}
              alt="images"
              className="w-[300px] h-56 object-fill rounded-xl absolute top-[-100px] right-5 z-0"
            />
          </div>
          <div className="flex gap-x-4 p-3 mt-32">
            <div className="bg-blue-700 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
              <span>مستر کارت</span>
            </div>
            <div className="bg-red-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
              <span>آمریکا</span>
            </div>
          </div>
          <div className="flex gap-x-2 items-center mr-4 text-xl font-Yek-ExtraBlack text-white">
            <FaCcMastercard size={30} />
            <h1>مسترکارت:</h1>
            <span>مستر کارت آمریکا</span>
          </div>
          <div className="flex gap-x-2 mr-4 my-4">
            <GiMoneyStack size={30} color="#fff"/>
            <h1 className="text-xl font-Yek-ExtraBlack text-white">قیمت :</h1>
            <span className="text-xl font-Yek-ExtraBlack text-red-700 border-b-4 border-red-700">
              {numberConvertToPersian(masterPrice.toLocaleString())}تومان
            </span>
          </div>
          <div className="flex gap-x-2 mr-4 text-xl font-Yek-ExtraBlack text-white mt-4">
            <SiUnitednations size={30} />
            <h1>کشور:</h1>
            <span>آمریکا</span>
          </div>
          <div className="flex gap-x-2 mr-4 text-xl font-Yek-ExtraBlack text-white mt-4">
            <RxTimer size={30} />
            <h1>اعتبار:</h1>
            <span>سه سال</span>
          </div>
          <div className="flex items-center justify-center mb-8 absolute -bottom-16 right-14">
            <button className="flex bg-[#4c20ff] rounded-lg px-2 py-4 items-center gap-x-2 hover:ring-[7px] ring-[#b5a3ff] transition-all duration-300">
              <span className="text-lg text-white font-Yek-ExtraBlack">
                توضیحات و خرید مسترکارت
              </span>
              <FaLongArrowAltLeft color="#fff" size={25} />
            </button>
          </div>
        </div>
        <div className=" w-[350px] rounded-2xl h-[390px]  relative master_Cart">
          <div className="absolute top-[-110px] left-4 bg-red-600 flex text-white px-2 text-lg font-Yek-ExtraBold text-center rounded-xl z-10">
            <h1>{numberConvertToPersian(masterOffer)}</h1>
            <span>%</span>
          </div>
          <div className="rounded-xl">
            <img
              src={images}
              alt="images"
              className="w-[300px] h-56 object-fill rounded-xl absolute top-[-100px] right-5 z-0"
            />
          </div>
          <div className="flex gap-x-4 p-3 mt-32">
            <div className="bg-blue-700 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
              <span>مستر کارت</span>
            </div>
            <div className="bg-red-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
              <span>آمریکا</span>
            </div>
          </div>
          <div className="flex gap-x-2 items-center mr-4 text-xl font-Yek-ExtraBlack text-white">
            <FaCcMastercard size={30} />
            <h1>مسترکارت:</h1>
            <span>مستر کارت آمریکا</span>
          </div>
          <div className="flex gap-x-2 mr-4 my-4">
            <GiMoneyStack size={30} color="#fff"/>
            <h1 className="text-xl font-Yek-ExtraBlack text-white">قیمت :</h1>
            <span className="text-xl font-Yek-ExtraBlack text-red-700 border-b-4 border-red-700">
              {numberConvertToPersian(masterPrice.toLocaleString())}تومان
            </span>
          </div>
          <div className="flex gap-x-2 mr-4 text-xl font-Yek-ExtraBlack text-white mt-4">
            <SiUnitednations size={30} />
            <h1>کشور:</h1>
            <span>آمریکا</span>
          </div>
          <div className="flex gap-x-2 mr-4 text-xl font-Yek-ExtraBlack text-white mt-4">
            <RxTimer size={30} />
            <h1>اعتبار:</h1>
            <span>سه سال</span>
          </div>
          <div className="flex items-center justify-center mb-8 absolute -bottom-16 right-14">
            <button className="flex bg-[#4c20ff] rounded-lg px-2 py-4 items-center gap-x-2 hover:ring-[7px] ring-[#b5a3ff] transition-all duration-300">
              <span className="text-lg text-white font-Yek-ExtraBlack">
                توضیحات و خرید مسترکارت
              </span>
              <FaLongArrowAltLeft color="#fff" size={25} />
            </button>
          </div>
        </div>
        <div className=" w-[350px] rounded-2xl h-[390px]  relative master_Cart">
          <div className="absolute top-[-110px] left-4 bg-red-600 flex text-white px-2 text-lg font-Yek-ExtraBold text-center rounded-xl z-10">
            <h1>{numberConvertToPersian(masterOffer)}</h1>
            <span>%</span>
          </div>
          <div className="rounded-xl">
            <img
              src={images}
              alt="images"
              className="w-[300px] h-56 object-fill rounded-xl absolute top-[-100px] right-5 z-0"
            />
          </div>
          <div className="flex gap-x-4 p-3 mt-32">
            <div className="bg-blue-700 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
              <span>مستر کارت</span>
            </div>
            <div className="bg-red-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
              <span>آمریکا</span>
            </div>
          </div>
          <div className="flex gap-x-2 items-center mr-4 text-xl font-Yek-ExtraBlack text-white">
            <FaCcMastercard size={30} />
            <h1>مسترکارت:</h1>
            <span>مستر کارت آمریکا</span>
          </div>
          <div className="flex gap-x-2 mr-4 my-4">
            <GiMoneyStack size={30} color="#fff"/>
            <h1 className="text-xl font-Yek-ExtraBlack text-white">قیمت :</h1>
            <span className="text-xl font-Yek-ExtraBlack text-red-700 border-b-4 border-red-700">
              {numberConvertToPersian(masterPrice.toLocaleString())}تومان
            </span>
          </div>
          <div className="flex gap-x-2 mr-4 text-xl font-Yek-ExtraBlack text-white mt-4">
            <SiUnitednations size={30} />
            <h1>کشور:</h1>
            <span>آمریکا</span>
          </div>
          <div className="flex gap-x-2 mr-4 text-xl font-Yek-ExtraBlack text-white mt-4">
            <RxTimer size={30} />
            <h1>اعتبار:</h1>
            <span>سه سال</span>
          </div>
          <div className="flex items-center justify-center mb-8 absolute -bottom-16 right-14">
            <button className="flex bg-[#4c20ff] rounded-lg px-2 py-4 items-center gap-x-2 hover:ring-[7px] ring-[#b5a3ff] transition-all duration-300">
              <span className="text-lg text-white font-Yek-ExtraBlack">
                توضیحات و خرید مسترکارت
              </span>
              <FaLongArrowAltLeft color="#fff" size={25} />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-20 pb-10">
        <button className="bg-[#4c20ff] flex text-white items-center gap-x-2 px-3 py-4 rounded-lg shadow-2xl hover:ring-[7px] ring-[#b5a3ff] transition-all duration-300">
          <span className="text-lg font-Yek-ExtraBold">محصولات بیشتر</span>
          <FaPlus color="#fff" size={15} />
        </button>
      </div>
    </div>
  )
}

export default MasterShop
