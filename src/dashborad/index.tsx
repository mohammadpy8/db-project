import { FC, useState } from "react";
import { RxDashboard } from "react-icons/rx";
import {
  FaListUl,
  FaRegAddressCard,
  FaRegMoneyBill1,
  FaRegComment,
  FaBtc,
} from "react-icons/fa6";
import { TbTicket } from "react-icons/tb";
import { FiUserCheck } from "react-icons/fi";
import { TiThListOutline } from "react-icons/ti";
import { IoMdCloseCircleOutline } from "react-icons/io";
import IconUsers from "../assets/images/user.png";
import numberConvertToPersian from "../shared/numberConvertToPersian";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiCommentDots } from "react-icons/bi";
import DatePickers from "../module/datePicker";
import { Outlet } from "react-router-dom";

const DashboradLayout: FC = () => {
  const [numberPhone, setNumberPhone] = useState<string>("09918986324");

  return (
    <div className="flex w-full max-w-[1600px] mx-auto my-0 relative">
      <div className="p-5 w-[300px] sticky top-0 right-0 sidebar z-[11]">
        <div className="py-2 px-0 sticky top-[20px]">
          <h1 className="text-2xl font-Yek-ExtraBlack text-gray-800 z-[25] bg-[#f5f8fc]">
            داشبورد ایرانیان
          </h1>
        </div>
        <div className="overflow-auto menu">
          <div className="text-sm font-Yek-SemiBold text-gray-600 mt-8 mb-8">
            <h1>منوی اصلی</h1>
          </div>

          <ul className="text-gray-700 space-y-8">
            <li className="flex gap-x-2 text-lg font-Yek-Bold text-white bg-primary-300 rounded-lg py-2 pr-2">
              <RxDashboard color="#fff" size={25} />
              <h1>داشبورد</h1>
            </li>
            <li className="flex gap-x-2 text-lg font-Yek-Bold hover:bg-primary-300 hover:text-white hover:rounded-lg hover:py-2 hover:pr-2 transition-all duration-300">
              <FaListUl color="#333" size={25} />
              <h1>لیست اعضا</h1>
            </li>
            <li className="flex gap-x-2 text-lg font-Yek-Bold">
              <FaRegMoneyBill1 color="#333" size={25} />
              <h1>کیف پول</h1>
            </li>
            <li className="flex gap-x-2 text-lg font-Yek-Bold">
              <FaRegComment color="#333" size={25} />
              <h1>کامنت ها</h1>
            </li>
            <li className="flex gap-x-2 text-lg font-Yek-Bold">
              <FaBtc color="#333" size={25} />
              <h1>لیست ارزها</h1>
            </li>
            <li className="flex gap-x-2 text-lg font-Yek-Bold">
              <FaRegAddressCard color="#333" size={25} />
              <h1>لیست مسترکارت</h1>
            </li>
            <li className="flex gap-x-2 text-lg font-Yek-Bold">
              <TbTicket color="#333" size={25} />
              <h1>تیکت ها</h1>
            </li>
            <li className="flex gap-x-2 text-lg font-Yek-Bold">
              <TiThListOutline color="#333" size={25} />
              <h1>لیست تمام ارزها</h1>
            </li>
            <li className="flex gap-x-2 text-lg font-Yek-Bold">
              <FiUserCheck color="#333" size={25} />
              <h1>حساب کاربری</h1>
            </li>
            <li className="flex gap-x-2 text-lg font-Yek-Bold text-red-600">
              <IoMdCloseCircleOutline color="red" size={25} />
              <h1>خروج از حساب کاربری</h1>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full overflow-hidden min-h-screen py-5 pr-0 pl-4">
        <div className="w-full max-w-[1460px] my-0 mx-auto">
          <div className="w-full bg-[#e6e6e6] py-4 px-8 mt-2 rounded-lg flex justify-between items-center">
            <div>
              <div className="flex gap-x-2 items-center">
                <div>
                  <img
                    src={IconUsers}
                    alt="useres"
                    className="rounded-full w-12"
                  />
                </div>
                <div className="text-md font-Yek-SemiBold text-gray-600">
                  <h1>محمد</h1>
                  <h1>{numberConvertToPersian(numberPhone)}</h1>
                </div>
              </div>
            </div>
            <div className="flex gap-x-4">
              <div>
                <div className="relative flex gap-x-2">
                  <IoNotificationsOutline color="#333" size={30} />
                  <h1 className="text-lg font-Yek-Bold text-gray-700">
                    اطلاعیه ها
                  </h1>
                  <span className="w-3 h-3 bg-green-500 rounded-full dateDelay absolute top-0 right-1"></span>
                </div>
              </div>
              <div className="flex gap-x-2">
                <BiCommentDots color="#333" size={30} />
                <h1 className="text-lg font-Yek-Bold text-gray-700">
                  پشتیبانی
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-between items-center">
          <div className="flex gap-x-2 items-center">
            <div>
              <span className="block w-4 h-4 bg-green-500 rounded-full dateDelay"></span>
            </div>
            <div className="bg-gray-200 p-2 rounded-lg">
              <DatePickers />
            </div>
          </div>
          <div className="flex gap-x-4">
            <button className="bg-primary-300 text-white px-1 py-3 rounded-lg font-Yek-Regular text-sm">
              واریز تومانی
            </button>
            <button className="border-2 text-black px-1 py-3 rounded-lg font-Yek-Regular text-sm">
              برداشت تومانی
            </button>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboradLayout;
