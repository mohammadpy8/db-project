import { FC } from "react";
import verify from "../../assets/images/auth.png";
import { data01, data02 } from "../../shared/dataChart";
import { PieChart } from "recharts";
import { Pie } from "recharts";
import SliderCoin from "../../module/sliderCoin";

const AdminPanel: FC = () => {
  return (
    <div className="w-full bg-[#f1f1f1] rounded-lg mt-6">
      <div className="flex flex-col gap-y-2 p-8">
        <h1 className="text-2xl font-Yek-ExtraBlack text-gray-800">
          داشبورد من
        </h1>
        <div className="flex gap-x-1 font-Yek-Light text-gray-600">
          <span>حساب کاربری</span>
          <span className="font-Yek-SemiBold text-black">/</span>
          <span>داشبورد من</span>
        </div>
        <div className="flex m-4 gap-x-10">
          <div className="bg-white  border-2 border-gray-300 rounded-lg w-full relative">
            <div>
              <h1 className="text-xl font-Yek-ExtraBold p-5 text-gray-700">
                کل اعتبار
              </h1>
            </div>
            <div className="flex justify-between">
              <div>
                <div className="text-2xl font-Yek-Bold px-5 text-gray-700">
                  <h1>صفر تومان</h1>
                </div>
                <div className="flex gap-x-4 px-5 mt-4">
                  <div className="space-y-4">
                    <div className="flex items-center gap-x-1 text-sm font-Yek-Bold">
                      <span className="bg-yellow-500 w-3 h-3 rounded-lg block"></span>
                      <h1>صفر تومان</h1>
                    </div>
                    <div className="text-gray-700 font-Yek-Bold">
                      <h1>موجودی ارزی</h1>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-x-1 text-sm font-Yek-Bold">
                      <span className="bg-green-500 w-3 h-3 rounded-lg block"></span>
                      <h1>صفر تومان</h1>
                    </div>
                    <div className="text-gray-700 font-Yek-Bold">
                      <h1>موجودی تومانی</h1>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-x-1 text-sm font-Yek-Bold">
                      <span className="bg-blue-500 w-3 h-3 rounded-lg block"></span>
                      <h1>صفر تومان</h1>
                    </div>
                    <div className="text-gray-700 font-Yek-Bold">
                      <h1>موجودی لیر</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[9px] left-3">
                <PieChart width={220} height={220}>
                  <Pie
                    data={data01}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={50}
                    fill="#8884d8"
                  />
                  <Pie
                    data={data02}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#82ca9d"
                    label
                  />
                </PieChart>
              </div>
            </div>
          </div>
          <div className="dash w-full rounded-lg">
            <div className="m-8">
              <div className="flex items-center text-white font-Yek-SemiBold">
                <div>
                  <img src={verify} alt="verify" className="w-44" />
                </div>
                <div>
                  <span>
                    احراز هویت شما تکمیل نیست جهت استفاده از تمامی امکانات صرافی
                    احراز هویت خود را تکمیل نمایید
                  </span>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="bg-green-500 text-white text-lg px-5 rounded-lg font-Yek-Bold py-3">
                  احراز هویت
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-11 mt-[-25px]">
        <div className="bg-white border-2 border-gray-300 rounded-lg py-4">
          <SliderCoin border={true}/>
        </div>
      </div>
      <div>
        <h1></h1>
      </div>
    </div>
  );
};

export default AdminPanel;
