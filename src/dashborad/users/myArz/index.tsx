import { FC, useState } from 'react'
import CustomeModal from '../../../module/customModal'

const MyArz: FC = () => {
  const [changeModal, setChangeModal] = useState<boolean>(false)

  return (
    <div className="p-12">
      <div className="flex justify-between">
        <div>
          <h1 className="text-gray-600 text-2xl font-Yek-ExtraBlack">
            محصولات ارزی من
          </h1>
        </div>
        <div>
          <button
            className="text-white text-lg font-Yek-SemiBold bg-primary-300 p-3 rounded-xl hover:ring-[6px] transition-all duration-300"
            onClick={() => setChangeModal(!changeModal)}
          >
            ثبت محصول جدید
          </button>
        </div>
      </div>
      <CustomeModal
        changeModal={changeModal}
        setChangeModal={setChangeModal}
        styles="w-[600px] h-[620px]"
      >
        <div>
          <div className="flex justify-center mt-12">
            <h1 className="text-2xl font-Yek-ExtraBlack text-gray-700">
              ثبت محصول جدید ارزی
            </h1>
          </div>
          <div className="mt-8">
            <form>
              <div className="space-y-3">
                <div className="flex flex-col space-y-2">
                  <label className="text-lg font-Yek-ExtraBold text-gray-700">
                    عنوان محصول <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="عنوان محصول را وارد کنید"
                    className="outline-none bg-gray-100 py-3 px-2 text-lg font-Yek-Bold rounded-xl "
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-lg font-Yek-ExtraBold text-gray-700">
                    قیمت محصول <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="قیمت محصول را وارد کنید"
                    className="outline-none bg-gray-100 py-3 px-2 text-lg font-Yek-Bold rounded-xl "
                  />
                </div>
                <div className="flex justify-between">
                  <label className="text-lg font-Yek-ExtraBold text-gray-700">
                    عکس محصول <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="file"
                    id="myFile"
                    name="filename"
                    accept="image/png, image/jpg, image/gif, image/jpeg image/avif"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-lg font-Yek-ExtraBold text-gray-700">
                    توضیحات محصول <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    name=""
                    id=""
                    className="outline-none bg-gray-100 py-3 px-2 text-lg font-Yek-Bold rounded-xl resize-none h-32"
                    placeholder="توضیحات محصول را وارد کنید"
                  />
                </div>
              </div>
              <div className="mt-8">
                <button className="text-lg bg-primary-300 text-white w-full py-3 rounded-xl hover:ring-[6px] transition-all duration-300 font-Yek-SemiBold">
                  ارسال محصول
                </button>
              </div>
            </form>
          </div>
        </div>
      </CustomeModal>
    </div>
  )
}

export default MyArz
