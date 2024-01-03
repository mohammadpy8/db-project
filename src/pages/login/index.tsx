import { FC, useEffect, useState } from 'react'
import { loginType, registerType } from '../../types/loginTypes/LoginTypes'
import registerValidation from '../../validation/registerValidation'

const Login: FC = () => {
  const [errorRegister, setErrorRegister] = useState<registerType>({
    fullName: '',
    phone: '',
    password: '',
  })
  const [errorLogin, setErrroLogin] = useState<loginType>({
    phone: '',
    password: '',
  })
  const [loginForm, setFormLogin] = useState<string>('register')
  const [login, setLogin] = useState<loginType>({
    phone: '',
    password: '',
  })
  const [register, setRegister] = useState<registerType>({
    fullName: '',
    phone: '',
    password: '',
  })

  const [registerTouched, setRegisterTouched] = useState<registerType>({
    fullName: '',
    phone: '',
    password: '',
  })

  const registerChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const name = event.target.name
    const value = event.target.value
    console.log(register)
    setRegister({ ...register, [name]: value })
  }

  const loginChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value
    setLogin({ ...login, [name]: value })
  }

  const registerFocusHandler = (
    event: React.FocusEvent<HTMLInputElement, Element>,
  ) => {
    setRegisterTouched({ ...registerTouched, [event.target.name]: true })
  }

  useEffect(() => {
    setErrorRegister(registerValidation(register))
  }, [register, registerTouched])

  console.log(errorRegister)

  return (
    <div className="container flex justify-center py-12">
      {loginForm === 'register' ? (
        <div className="bg-white w-[50%] h-auto loginPage rounded-xl">
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
                      className={
                        errorRegister.fullName && registerTouched.fullName
                          ? 'w-full outline-none font-Yek-Bold border-2  border-solid border-transparent transition-all border-red-500 placeholder:text-gray-400 placeholder:select-none text-xl rounded-xl py-5  placeholder:text-right pr-14  pl-4 bg-gray-100 '
                          : 'w-full outline-none font-Yek-Bold border-2  border-solid border-transparent transition-all focus:border-gray-300 placeholder:text-gray-400 placeholder:select-none text-xl rounded-xl py-5  placeholder:text-right pr-14  pl-4 bg-gray-100 '
                      }
                      placeholder="نام و نام خانوادگی"
                      type="text"
                      name="fullName"
                      value={register.fullName}
                      onChange={registerChangeHandler}
                      onFocus={registerFocusHandler}
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
                  <div>
                    {errorRegister.fullName && registerTouched.fullName && (
                      <span className="errorValidation font-Yek-Bold">
                        {errorRegister.fullName}
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      className={
                        errorRegister.phone && registerTouched.phone
                          ? 'w-full outline-none font-Yek-Bold border-2  border-solid border-transparent transition-all border-red-500 placeholder:text-gray-400 placeholder:select-none text-xl rounded-xl py-5  placeholder:text-right pr-14  pl-4 bg-gray-100 '
                          : 'w-full outline-none font-Yek-Bold border-2  border-solid border-transparent transition-all focus:border-gray-300 placeholder:text-gray-400 placeholder:select-none text-xl rounded-xl py-5  placeholder:text-right pr-14  pl-4 bg-gray-100 '
                      }
                      placeholder="شماره تلفن"
                      type="number"
                      name="phone"
                      value={register.phone}
                      onChange={registerChangeHandler}
                      onFocus={registerFocusHandler}
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
                  <div>
                    {errorRegister.phone && registerTouched.phone && (
                      <span className="errorValidation font-Yek-Bold">
                        {errorRegister.phone}
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      className={
                        errorRegister.password && registerTouched.password
                          ? 'w-full outline-none font-Yek-Bold border-2  border-solid border-transparent transition-all border-red-500 placeholder:text-gray-400 placeholder:select-none text-xl rounded-xl py-5  placeholder:text-right pr-14  pl-4 bg-gray-100 '
                          : 'w-full outline-none font-Yek-Bold border-2  border-solid border-transparent transition-all focus:border-gray-300 placeholder:text-gray-400 placeholder:select-none text-xl rounded-xl py-5  placeholder:text-right pr-14  pl-4 bg-gray-100 '
                      }
                      placeholder="رمز عبور"
                      type="text"
                      name="password"
                      value={register.password}
                      onChange={registerChangeHandler}
                      onFocus={registerFocusHandler}
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
                  <div>
                    {errorRegister.password && registerTouched.password && (
                      <span className="errorValidation font-Yek-Bold">
                        {errorRegister.password}
                      </span>
                    )}
                  </div>
                </div>
                <div className="w-full mt-8">
                  {(errorRegister.fullName && registerTouched.fullName) ||
                  (errorRegister.password && registerTouched.password) ||
                  (errorRegister.phone && registerTouched.phone) ? (
                    <button
                      className="bg-primary-300 w-full py-4 text-xl font-Yek-ExtraBlack text-white rounded-xl hover:ring-[6px] transition-all duration-300"
                      disabled
                    >
                      ارسال کد تایید
                    </button>
                  ) : (
                    <button className="bg-primary-300 w-full py-4 text-xl font-Yek-ExtraBlack text-white rounded-xl hover:ring-[6px] transition-all duration-300">
                      ارسال کد تایید
                    </button>
                  )}
                </div>
                <div className="flex justify-center items-center gap-x-2 my-4 text-lg font-Yek-Bold">
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
                      name="phone"
                      value={login.phone}
                      onChange={loginChangeHandler}
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
                      name="password"
                      value={login.password}
                      onChange={loginChangeHandler}
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
