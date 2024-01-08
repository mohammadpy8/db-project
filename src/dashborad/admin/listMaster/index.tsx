import { FC, useState } from 'react'
import numberConvertToPersian from '../../../shared/numberConvertToPersian'
import images from '../../../assets/images/preview.png'
import CustomeModal from '../../../module/customModal'
import useLocalStorage from '../../../hooks/useLocalStorage'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'

interface masterType {
  title: string
  price: string
  description: string
  inventory: string
}

const ListMaster: FC = () => {
  const [changeModal, setChangeModal] = useState<any>(false)
  const [matserDetails, setMasterDetails] = useState<masterType>({
    title: '',
    price: '',
    description: '',
    inventory: '',
  })

  const getToken = useLocalStorage('', 'GET')

  const changeHandlerMaster = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value
    setMasterDetails({ ...matserDetails, [name]: value })
  }

  const submitHandlerMaster = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    fetch('http://127.0.0.1:8000/digital/mastercart/', {
      method: 'POST',
      body: JSON.stringify(matserDetails),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${getToken}`,
      },
    }).then((res) => {
      const status = res.status
      if (status === 200 || 201) {
        toast.success('مستر کارت با موفقیت ثبت شد.')
        setChangeModal(!changeModal)
        setMasterDetails({
          title: '',
          price: '',
          description: '',
          inventory: '',
        })
      }
    })
  }

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
        </div>
      </div>
      <CustomeModal
        setChangeModal={setChangeModal}
        changeModal={changeModal}
        styles="w-[600px] h-[650px]"
      >
        <div>
          <div className="flex justify-center mt-12">
            <h1 className="text-2xl font-Yek-ExtraBlack text-gray-700">
              ثبت مستر کارت جدید
            </h1>
          </div>
          <div className="mt-8">
            <form onSubmit={submitHandlerMaster}>
              <div className="space-y-3">
                <div className="flex flex-col space-y-2">
                  <label className="text-lg font-Yek-ExtraBold text-gray-700">
                    عنوان مسترکارت <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="عنوان مستر کارت را وارد کنید"
                    name="title"
                    value={matserDetails.title}
                    onChange={changeHandlerMaster}
                    className="outline-none bg-gray-100 py-3 px-2 text-lg font-Yek-Bold rounded-xl "
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-lg font-Yek-ExtraBold text-gray-700">
                    قیمت مستر کارت <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="قیمت محصول را وارد کنید"
                    name="price"
                    value={matserDetails.price}
                    onChange={changeHandlerMaster}
                    className="outline-none bg-gray-100 py-3 px-2 text-lg font-Yek-Bold rounded-xl "
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-lg font-Yek-ExtraBold text-gray-700">
                    تعداد مستر کارت <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="تعداد محصول را وارد کنید"
                    name="price"
                    value={matserDetails.inventory}
                    onChange={changeHandlerMaster}
                    className="outline-none bg-gray-100 py-3 px-2 text-lg font-Yek-Bold rounded-xl "
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-lg font-Yek-ExtraBold text-gray-700">
                    توضیحات مسترکارت <span className="text-red-600">*</span>
                  </label>
                  <input
                    name="description"
                    value={matserDetails.description}
                    onChange={changeHandlerMaster}
                    className="outline-none bg-gray-100 pt-2 py-16  px-2 text-lg font-Yek-Bold rounded-xl resize-none"
                    placeholder="توضیحات محصول را وارد کنید"
                  />
                </div>
              </div>
              <div className="mt-8">
                <button className="text-lg bg-primary-300 text-white w-full py-3 rounded-xl hover:ring-[6px] transition-all duration-300 font-Yek-SemiBold">
                  ارسال مسترکارت
                </button>
              </div>
            </form>
          </div>
        </div>
      </CustomeModal>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  )
}

export default ListMaster
