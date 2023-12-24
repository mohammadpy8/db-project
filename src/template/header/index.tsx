import { FC } from 'react'
import Button from '../../interface/Button'
import { RiUserLine } from 'react-icons/ri'

const Header: FC = () => {
  const clickHandler = () => {}

  return (
    <div>
      <div className="container border-b-[1px] border-gray-200 h-16 flex justify-between items-center mt-2">
        <div className="text-3xl font-Yek-ExtraBlack text-primary-400">
          <h1>ارز دیجیتال ایرانیان</h1>
        </div>
        <div>
          <ul className="flex gap-x-12 font-Yek-Bold text-gray-500 justify-center items-center">
            <li>خرید ارز دیجیتال</li>
            <li>قیمت ارز های دیجیتال</li>
            <li>منو کامل</li>
            <li>پشتیبانی</li>
            <li>وبلاگ</li>
          </ul>
        </div>
        <div className="flex gap-x-4">
          <Button
            styles="hover:bg-gray-200 hover:rounded-lg transition-all duration-300"
            clickHandler={clickHandler}
          >
            <h1 className="font-Yek-Bold text-primary-100 border-[1px] p-3 rounded-lg hover:text-gray-500 transition-all duration-300">
              ورود
            </h1>
          </Button>
          <Button
            styles="flex items-center gap-x-2 bg-primary-100 p-3 rounded-lg hover:bg-primary-50 transition-all duration-300"
            clickHandler={clickHandler}
          >
            <RiUserLine color="#fff" size={25} />
            <h1 className="text-white font-Yek-Bold">ثبت نام</h1>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Header
