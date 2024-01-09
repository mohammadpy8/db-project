import { FC, useEffect, useState } from 'react'
import ScrollIndicator from '../../module/scrollIndicator'
import SliderHeader from '../sliderHeader'
import { Link } from 'react-router-dom'
import useSaveInfoLocalStorage from '../../hooks/useSaveInfoLocalStorage'

const Header = () => {

  const userInfo = useSaveInfoLocalStorage("", "GET")

  const [scrollCount, setScrollCount] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScroll = window.scrollY > 104
      setScrollCount(isScroll)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [window.scrollY])

  console.log(window.scrollY)

  return (
    <>
      <SliderHeader />
      <div
        className={
          scrollCount
            ? 'w-full bg-gray-100 z-50 sticky top-0 transition-all duration-500'
            : 'w-full bg-gray-100 z-50 sticky transition-all duration-500'
        }
      >
        <div className="container w-full border-b-[1px] border-gray-200 h-20 flex justify-between items-center">
          <div className="text-3xl font-Yek-ExtraBlack text-primary-400">
            <h1>ارز دیجیتال ایرانیان</h1>
          </div>
          <div>
            <ul className="flex gap-x-12 font-Yek-Bold text-gray-500 justify-center items-center">
              <li>
                <Link to="/arz-shop">خرید ارز دیجیتال</Link>
              </li>
              <li>قیمت ارز های دیجیتال</li>
              <li>منو کامل</li>
              <li>پشتیبانی</li>
              <li>وبلاگ</li>
            </ul>
          </div>
          <div className="flex gap-x-4">
            {userInfo.is_staff.length > 0 ? (
              <Link
                to={
                  userInfo.is_staff === 'False'
                    ? '/users-dashboard/dashboard'
                    : '/admin-dashboard/dashboard'
                }
              >
                <button className="text-white text-lg bg-primary-300 font-Yek-SemiBold p-3 rounded-xl hover:ring-[6px] duration-300 transition-all">
                  رفتن به پنل کاربری
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button className="text-white text-lg bg-primary-300 font-Yek-SemiBold p-3 rounded-xl hover:ring-[6px] duration-300 transition-all">
                  ورود / ثبت نام
                </button>
              </Link>
            )}
          </div>
        </div>
        <ScrollIndicator />
      </div>
    </>
  )
}

export default Header
