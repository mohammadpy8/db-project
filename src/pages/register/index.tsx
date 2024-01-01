import { FC } from 'react'
import { MdPersonalInjury } from 'react-icons/md'

const Register: FC = () => {
  return (
    <div className="min-h-screen bg-[#0c111a] flex justify-between">
      <div className="bg-[#0042a0] w-[800px] min-h-screen"></div>
      <div>
        <div className="flex flex-col justify-center items-center pl-44 mt-16 gap-y-4">
          <h1 className="text-white font-Yek-SemiBold text-xl">
            ثبت نام در ارز دیجیتال ایرانیان
          </h1>
          <span className="text-md text-gray-400 font-Yek-Regular">
            جهت انجام امور معاملاتی نیاز به حساب کاربری دارید
          </span>
        </div>
        <div>
          <form className="pl-32">
            <div className="flex flex-col gap-y-7 mt-16">
              <div className="flex w-[430px] shadow-[0_0_0_1px_#21262e] rounded-lg px-2 py-3 justify-between bg-[#0b0e12]">
                <div>
                  <input
                    type="text"
                    placeholder="نام و نام خانوادگی"
                    className="w-80 bg-inherit font-Yek-SemiBold border-none outline-none text-white"
                  />
                </div>
                <div className="border-r-[0.5px] px-2 border-[#808183]">
                  <MdPersonalInjury color="#fff" size={25} />
                </div>
              </div>
              <div className="flex w-[430px] shadow-[0_0_0_1px_#21262e] rounded-lg px-2 py-3 justify-between bg-[#0b0e12]">
                <div>
                  <input
                    type="text"
                    placeholder="شماره موبایل"
                    className="w-80 bg-inherit font-Yek-SemiBold border-none outline-none text-white"
                  />
                </div>
                <div className="border-r-[0.5px] px-2 border-[#808183]">
                  <MdPersonalInjury color="#fff" size={25} />
                </div>
              </div>
              <div className="flex w-[430px] shadow-[0_0_0_1px_#21262e] rounded-lg px-2 py-3 justify-between bg-[#0b0e12]">
                <div>
                  <input
                    type="text"
                    placeholder="رمز عبور"
                    className="w-80 bg-inherit font-Yek-SemiBold border-none outline-none text-white"
                  />
                </div>
                <div className="border-r-[0.5px] px-2 border-[#808183]">
                  <MdPersonalInjury color="#fff" size={25} />
                </div>
              </div>
              <div className="flex flex-row-reverse items-center justify-end">
                <div>
                  <label
                    htmlFor="role"
                    className="font-Yek-SemiBold text-gray-400 flex"
                  >
                    <span className="text-primary-300"> قوانین و مقررات</span>را
                    <span>مطالعه و قبول دارم</span>
                  </label>
                </div>
                <div>
                  <input type="checkbox" />
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <button className="bg-primary-300 text-white px-5 py-3 rounded-2xl hover:opacity-70 transition-all duration-300 font-Yek-Regular">
                ثبت نام
              </button>
            </div>
          </form>
        </div>
        <div className="h-[10px] w-[500px] re-li bg-[linear-gradient(270deg,rgba(49,54,64,0) 0%,#313640 49.01%,rgba(49,54,64,0) 100%)]"></div>
      </div>
    </div>
  )
}

export default Register
