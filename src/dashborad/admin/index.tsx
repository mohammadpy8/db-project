import { FC } from "react";
import verify from "../../assets/images/auth.png";

const AdminPanel: FC = () => {
  return (
    <div className="w-full bg-[#e6e6e6] rounded-lg mt-6">
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
          <div className="bg-white  border-2 border-gray-300 rounded-lg w-full">
            <div>
              <h1 className="text-xl font-Yek-ExtraBold p-5 text-gray-700">
                کل اعتبار
              </h1>
            </div>
            <div></div>
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
    </div>
  );
};

export default AdminPanel;

{
  /* <PieChart width={730} height={250}>
  <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
</PieChart> */
}

// const data01 = [
//     {
//       "name": "Group A",
//       "value": 400
//     },
//     {
//       "name": "Group B",
//       "value": 300
//     },
//     {
//       "name": "Group C",
//       "value": 300
//     },
//     {
//       "name": "Group D",
//       "value": 200
//     },
//     {
//       "name": "Group E",
//       "value": 278
//     },
//     {
//       "name": "Group F",
//       "value": 189
//     }
//   ];
//   const data02 = [
//     {
//       "name": "Group A",
//       "value": 2400
//     },
//     {
//       "name": "Group B",
//       "value": 4567
//     },
//     {
//       "name": "Group C",
//       "value": 1398
//     },
//     {
//       "name": "Group D",
//       "value": 9800
//     },
//     {
//       "name": "Group E",
//       "value": 3908
//     },
//     {
//       "name": "Group F",
//       "value": 4800
//     }
//   ];
