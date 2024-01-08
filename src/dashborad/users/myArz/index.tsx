import { FC, useState } from 'react'
import CustomeModal from '../../../module/customModal'
import useLocalStorage from '../../../hooks/useLocalStorage'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'

interface detailsType {
  title: string
  price: string
  description: string
}

const MyArz: FC = () => {
  const [changeModal, setChangeModal] = useState<boolean>(false)
  const [details, setDetails] = useState<detailsType>({
    title: '',
    price: '',
    description: '',
  })
  const getToken = useLocalStorage('', 'GET')
  const changeHanderDetails = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value
    setDetails({ ...details, [name]: value })
  }

  const sendArz = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    fetch('http://127.0.0.1:8000/digital/currencies/', {
      method: 'POST',
      body: JSON.stringify(details),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${getToken}`,
      },
    }).then((res) => {
      const status = res.status
      if (status === 200 || 201) {
        toast.success('محصول با موفقیت ثبت شد.')
        setChangeModal(!changeModal)
        setDetails({ title: '', price: '', description: '' })
      }
    })
  }
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
        styles="w-[600px] h-[600px]"
      >
        <div>
          <div className="flex justify-center mt-12">
            <h1 className="text-2xl font-Yek-ExtraBlack text-gray-700">
              ثبت محصول جدید ارزی
            </h1>
          </div>
          <div className="mt-8">
            <form onSubmit={sendArz}>
              <div className="space-y-3">
                <div className="flex flex-col space-y-2">
                  <label className="text-lg font-Yek-ExtraBold text-gray-700">
                    عنوان محصول <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="عنوان محصول را وارد کنید"
                    value={details.title}
                    onChange={changeHanderDetails}
                    name="title"
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
                    value={details.price}
                    onChange={changeHanderDetails}
                    name="price"
                    className="outline-none bg-gray-100 py-3 px-2 text-lg font-Yek-Bold rounded-xl "
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-lg font-Yek-ExtraBold text-gray-700">
                    توضیحات محصول <span className="text-red-600">*</span>
                  </label>
                  <input
                    name="description"
                    value={details.description}
                    onChange={changeHanderDetails}
                    className="outline-none bg-gray-100 pt-2 py-20  px-2 text-lg font-Yek-Bold rounded-xl resize-none"
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
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  )
}

export default MyArz
