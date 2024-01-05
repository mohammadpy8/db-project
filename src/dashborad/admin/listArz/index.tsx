import { FC } from 'react'
import numberConvertToPersian from '../../../shared/numberConvertToPersian'
import images from '../../../assets/images/btcadmin.png'

const ListArz: FC = () => {
  return (
    <div className="p-9">
      <div className="text-2xl font-Yek-ExtraBlack text-gray-600">
        <h1>لیست ارزها</h1>
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
                <div className="bg-green-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
                  <span>ارز دیجیتال</span>
                </div>
                <div className="bg-red-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
                  <span>بیت کوین</span>
                </div>
              </div>
            </div>
            <div className="text-center space-y-4">
              <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                عرضه کننده
              </h1>
              <p className="text-lg text-gray-700 font-Yek-Regular">
                آقای سیف الهی
              </p>
            </div>
            <div className="text-center space-y-4">
              <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                وضعیت
              </h1>
              <button className="text-lg bg-primary-300 text-white font-Yek-SemiBold p-2 rounded-xl hover:ring-[6px] transition-all duration-300">
                در انتطار تایید
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
                <div className="bg-green-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
                  <span>ارز دیجیتال</span>
                </div>
                <div className="bg-red-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
                  <span>بیت کوین</span>
                </div>
              </div>
            </div>
            <div className="text-center space-y-4">
              <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                عرضه کننده
              </h1>
              <p className="text-lg text-gray-700 font-Yek-Regular">
                آقای سیف الهی
              </p>
            </div>
            <div className="text-center space-y-4">
              <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                وضعیت
              </h1>
              <button className="text-lg bg-primary-300 text-white font-Yek-SemiBold p-2 rounded-xl hover:ring-[6px] transition-all duration-300">
                در انتطار تایید
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
                <div className="bg-green-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
                  <span>ارز دیجیتال</span>
                </div>
                <div className="bg-red-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
                  <span>بیت کوین</span>
                </div>
              </div>
            </div>
            <div className="text-center space-y-4">
              <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                عرضه کننده
              </h1>
              <p className="text-lg text-gray-700 font-Yek-Regular">
                آقای سیف الهی
              </p>
            </div>
            <div className="text-center space-y-4">
              <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                وضعیت
              </h1>
              <button className="text-lg bg-primary-300 text-white font-Yek-SemiBold p-2 rounded-xl hover:ring-[6px] transition-all duration-300">
                در انتطار تایید
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
                <div className="bg-green-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
                  <span>ارز دیجیتال</span>
                </div>
                <div className="bg-red-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
                  <span>بیت کوین</span>
                </div>
              </div>
            </div>
            <div className="text-center space-y-4">
              <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                عرضه کننده
              </h1>
              <p className="text-lg text-gray-700 font-Yek-Regular">
                آقای سیف الهی
              </p>
            </div>
            <div className="text-center space-y-4">
              <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                وضعیت
              </h1>
              <button className="text-lg bg-primary-300 text-white font-Yek-SemiBold p-2 rounded-xl hover:ring-[6px] transition-all duration-300">
                در انتطار تایید
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListArz
