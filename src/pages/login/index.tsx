import { FC, useState } from 'react'

const Login: FC = () => {
  const [loginForm, setFormLogin] = useState<string>('register')
  return (
    <div className="container flex justify-center py-12">
      {loginForm === 'register' ? (
        <div className="bg-white w-[50%] h-[620px] loginPage rounded-xl">
          <div className="px-16">
            <div className="flex justify-around mt-12  text-2xl font-Yek-Bold w-full text-center">
              <div className="border-b-4 pb-4 w-full">
                <button onClick={() => setFormLogin('login')}>ورود</button>
              </div>
              <div className="w-full border-b-4 border-primary-400 text-primary-400 pb-4">
                <button onClick={() => setFormLogin('register')}>
                  ثبت نام
                </button>
              </div>
            </div>
            <div className="flex justify-center mt-8 text-3xl font-Yek-ExtraBlack">
              <h1>ثبت نام در ارز ایرانیان</h1>
            </div>
            <div className="mt-8">
              <form>
                <div className="space-y-5">
                  <div className="relative">
                    <input
                      className="w-full outline-none font-Yek-Bold border-2  border-solid border-transparent transition-all focus:border-gray-300 placeholder:text-gray-400 placeholder:select-none text-xl rounded-xl py-5  placeholder:text-right pr-14  pl-4 bg-gray-100 "
                      placeholder="نام و نام خانوادگی"
                      type="text"
                      value=""
                    />
                    <span className="flex justify-center items-center absolute top-1/2 -translate-y-1/2 border-solid transition-all border-gray-400 pl-3 right-3 border-l-[3px] ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="transition-all h-6 fill-gray-400 text-gray-400"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      className="w-full outline-none font-Yek-Bold border-2  border-solid border-transparent transition-all focus:border-gray-300 placeholder:text-gray-400 placeholder:select-none text-xl rounded-xl py-5  placeholder:text-right pr-14  pl-4 bg-gray-100 "
                      placeholder="شماره تلفن"
                      type="text"
                      value=""
                    />
                    <span className="flex justify-center items-center absolute top-1/2 -translate-y-1/2 border-solid transition-all border-gray-400 pl-3 right-3 border-l-[3px] ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="transition-all h-6 fill-gray-400 text-gray-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      className="w-full outline-none font-Yek-Bold border-2  border-solid border-transparent transition-all focus:border-gray-300 placeholder:text-gray-400 placeholder:select-none text-xl rounded-xl py-5  placeholder:text-right pr-14  pl-4 bg-gray-100 "
                      placeholder="رمز عبور"
                      type="text"
                      value=""
                    />
                    <span className="flex justify-center items-center absolute top-1/2 -translate-y-1/2 border-solid transition-all border-gray-400 pl-3 right-3 border-l-[3px] ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="transition-all h-6 fill-gray-400 text-gray-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="w-full mt-8">
                  <button className="bg-primary-300 w-full py-4 text-xl font-Yek-ExtraBlack text-white rounded-xl hover:ring-[6px] transition-all duration-300">
                    ارسال کد تایید
                  </button>
                </div>
                <div className="flex justify-center items-center gap-x-2 mt-4 text-lg font-Yek-Bold">
                  <span>اگر قبلا ثبت نام کرده اید!</span>
                  <span
                    className="text-primary-300 cursor-pointer"
                    onClick={() => setFormLogin('login')}
                  >
                    وارد شوید
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white w-[50%] h-[530px] loginPage rounded-xl">
          <div className="px-16">
            <div className="flex justify-around mt-12  text-2xl font-Yek-Bold w-full text-center">
              <div
                className={
                  loginForm === 'login'
                    ? 'w-full border-b-4 border-primary-400 text-primary-400 pb-4'
                    : 'border-b-4 pb-4 w-full'
                }
              >
                <button onClick={() => setFormLogin('login')}>ورود</button>
              </div>
              <div
                className={
                  loginForm === 'register'
                    ? 'w-full border-b-4 border-primary-400 text-primary-400 pb-4'
                    : 'border-b-4 pb-4 w-full'
                }
              >
                <button onClick={() => setFormLogin('register')}>
                  ثبت نام
                </button>
              </div>
            </div>
            <div className="flex justify-center mt-8 text-3xl font-Yek-ExtraBlack">
              <h1>ورود به ارز ایرانیان</h1>
            </div>
            <div className="mt-8">
              <form>
                <div className="space-y-5">
                  <div className="relative">
                    <input
                      className="w-full outline-none font-Yek-Bold border-2  border-solid border-transparent transition-all focus:border-gray-300 placeholder:text-gray-400 placeholder:select-none text-xl rounded-xl py-5  placeholder:text-right pr-14  pl-4 bg-gray-100 "
                      placeholder="شماره تلفن"
                      type="text"
                      value=""
                    />
                    <span className="flex justify-center items-center absolute top-1/2 -translate-y-1/2 border-solid transition-all border-gray-400 pl-3 right-3 border-l-[3px] ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="transition-all h-6 fill-gray-400 text-gray-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      className="w-full outline-none font-Yek-Bold border-2  border-solid border-transparent transition-all focus:border-gray-300 placeholder:text-gray-400 placeholder:select-none text-xl rounded-xl py-5  placeholder:text-right pr-14  pl-4 bg-gray-100 "
                      placeholder="رمز عبور"
                      type="text"
                      value=""
                    />
                    <span className="flex justify-center items-center absolute top-1/2 -translate-y-1/2 border-solid transition-all border-gray-400 pl-3 right-3 border-l-[3px] ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="transition-all h-6 fill-gray-400 text-gray-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="w-full mt-8">
                  <button className="bg-primary-300 w-full py-4 text-xl font-Yek-ExtraBlack text-white rounded-xl hover:ring-[6px] transition-all duration-300">
                    وارد شدن
                  </button>
                </div>
                <div className="flex justify-center items-center gap-x-2 mt-4 text-lg font-Yek-Bold">
                  <span>اگر ثبت نام نکرده اید!</span>
                  <span
                    className="text-primary-300 cursor-pointer"
                    onClick={() => setFormLogin('register')}
                  >
                    ثبت نام کنید
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Login
