import { FC, useState } from "react";
import numberConvertToPersian from "../../../shared/numberConvertToPersian";
import images from "../../../assets/images/preview.png";
import CustomeModal from "../../../module/customModal";

const ListMaster: FC = () => {
  const [changeModal, setChangeModal] = useState<any>(false);
  return (
    <div className="p-9">
      <div className="flex justify-between">
        <div className="text-2xl font-Yek-ExtraBlack text-gray-600">
          <h1>لیست مستر کارت ها</h1>
        </div>
        <div className="text-lg font-Yek-Bold ml-4">
          <button
            className="text-white bg-primary-300 p-2 rounded-xl hover:ring-[6px] transition-all duration-300"
            onClick={() => setChangeModal(true)}
          >
            اضافه کردن مسترکارت
          </button>
        </div>
      </div>
      <div className="bg-white mt-4 rounded-xl p-8">
        <div className="text-lg font-Yek-ExtraBlack flex gap-x-1 mb-2 text-gray-700">
          <h1>تعداد:</h1>
          <p>{numberConvertToPersian(4)}</p>
        </div>
        <div className="space-y-4">
          <div className="bg-gray-100 rounded-xl p-4 flex justify-between items-center">
            <div>
              <img
                src={images}
                alt="btc"
                className="w-28 h-28 rounded-full object-fill"
              />
            </div>
            <div className="text-center space-y-4">
              <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                محصول
              </h1>
              <p className="text-lg text-gray-700 font-Yek-Regular">
                ارز دیجیتال بیت کوین
              </p>
            </div>
            <div className="text-center space-y-4">
              <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                قیمت
              </h1>
              <p className="text-lg font-Yek-Regular text-red-600">
                {numberConvertToPersian(1560000)}تومان
              </p>
            </div>
            <div className="text-center space-y-4">
              <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                دسته بندی
              </h1>
              <div className="flex gap-x-4 p-3">
                <div className="bg-blue-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
                  <span>ارز دیجیتال</span>
                </div>
                <div className="bg-red-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
                  <span>بیت کوین</span>
                </div>
              </div>
            </div>
            <div className="text-center space-y-4">
              <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                کشور
              </h1>
              <p className="text-lg text-gray-700 font-Yek-Regular">آمریکا</p>
            </div>
            <div className="text-center space-y-4">
              <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                حذف محصول
              </h1>
              <button className="font-Yek-Bold bg-red-600 text-white px-3 py-2 rounded-xl hover:ring-[6px] transition-all ring-red-300 duration-300">
                حذف
              </button>
            </div>
          </div>
          <div className="bg-gray-100 rounded-xl p-4 flex justify-between items-center">
            <div>
              <img
                src={images}
                alt="btc"
                className="w-28 h-28 rounded-full object-fill"
              />
            </div>
            <div className="text-center space-y-4">
              <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                محصول
              </h1>
              <p className="text-lg text-gray-700 font-Yek-Regular">
                ارز دیجیتال بیت کوین
              </p>
            </div>
            <div className="text-center space-y-4">
              <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                قیمت
              </h1>
              <p className="text-lg font-Yek-Regular text-red-600">
                {numberConvertToPersian(1560000)}تومان
              </p>
            </div>
            <div className="text-center space-y-4">
              <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                دسته بندی
              </h1>
              <div className="flex gap-x-4 p-3">
                <div className="bg-blue-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
                  <span>ارز دیجیتال</span>
                </div>
                <div className="bg-red-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
                  <span>بیت کوین</span>
                </div>
              </div>
            </div>
            <div className="text-center space-y-4">
              <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                کشور
              </h1>
              <p className="text-lg text-gray-700 font-Yek-Regular">آمریکا</p>
            </div>
            <div className="text-center space-y-4">
              <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                حذف محصول
              </h1>
              <button className="font-Yek-Bold bg-red-600 text-white px-3 py-2 rounded-xl hover:ring-[6px] transition-all ring-red-300 duration-300">
                حذف
              </button>
            </div>
          </div>
          <div className="bg-gray-100 rounded-xl p-4 flex justify-between items-center">
            <div>
              <img
                src={images}
                alt="btc"
                className="w-28 h-28 rounded-full object-fill"
              />
            </div>
            <div className="text-center space-y-4">
              <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                محصول
              </h1>
              <p className="text-lg text-gray-700 font-Yek-Regular">
                ارز دیجیتال بیت کوین
              </p>
            </div>
            <div className="text-center space-y-4">
              <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                قیمت
              </h1>
              <p className="text-lg font-Yek-Regular text-red-600">
                {numberConvertToPersian(1560000)}تومان
              </p>
            </div>
            <div className="text-center space-y-4">
              <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                دسته بندی
              </h1>
              <div className="flex gap-x-4 p-3">
                <div className="bg-blue-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
                  <span>ارز دیجیتال</span>
                </div>
                <div className="bg-red-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
                  <span>بیت کوین</span>
                </div>
              </div>
            </div>
            <div className="text-center space-y-4">
              <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                کشور
              </h1>
              <p className="text-lg text-gray-700 font-Yek-Regular">آمریکا</p>
            </div>
            <div className="text-center space-y-4">
              <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                حذف محصول
              </h1>
              <button className="font-Yek-Bold bg-red-600 text-white px-3 py-2 rounded-xl hover:ring-[6px] transition-all ring-red-300 duration-300">
                حذف
              </button>
            </div>
          </div>
          <div className="bg-gray-100 rounded-xl p-4 flex justify-between items-center">
            <div>
              <img
                src={images}
                alt="btc"
                className="w-28 h-28 rounded-full object-fill"
              />
            </div>
            <div className="text-center space-y-4">
              <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                محصول
              </h1>
              <p className="text-lg text-gray-700 font-Yek-Regular">
                ارز دیجیتال بیت کوین
              </p>
            </div>
            <div className="text-center space-y-4">
              <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                قیمت
              </h1>
              <p className="text-lg font-Yek-Regular text-red-600">
                {numberConvertToPersian(1560000)}تومان
              </p>
            </div>
            <div className="text-center space-y-4">
              <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                دسته بندی
              </h1>
              <div className="flex gap-x-4 p-3">
                <div className="bg-blue-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
                  <span>ارز دیجیتال</span>
                </div>
                <div className="bg-red-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
                  <span>بیت کوین</span>
                </div>
              </div>
            </div>
            <div className="text-center space-y-4">
              <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                کشور
              </h1>
              <p className="text-lg text-gray-700 font-Yek-Regular">آمریکا</p>
            </div>
            <div className="text-center space-y-4">
              <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                حذف محصول
              </h1>
              <button className="font-Yek-Bold bg-red-600 text-white px-3 py-2 rounded-xl hover:ring-[6px] transition-all ring-red-300 duration-300">
                حذف
              </button>
            </div>
          </div>
        </div>
      </div>
      <CustomeModal
        setChangeModal={setChangeModal}
        changeModal={changeModal}
      ></CustomeModal>
    </div>
  );
};

export default ListMaster;
