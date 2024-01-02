import { FC, useState } from "react";
import InfoMasterCart from "../../template/infoMasterCart";
import MasterIcon from "../../assets/images/shopi.webp";
import { TbShoppingCartDollar } from "react-icons/tb";
import numberConvertToPersian from "../../shared/numberConvertToPersian";
import { Link } from "react-router-dom";

const MasterShop: FC = () => {
  const [arzCount, setArzCount] = useState<number>(20);

  return (
    <div className="container MasterPhoto h-[1500px]">
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
      <div></div>
    </div>
  );
};

export default MasterShop;
