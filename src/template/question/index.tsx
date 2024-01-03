import { FC, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

const Question: FC = () => {
  const [accordion, setAccordion] = useState<number>(0);

  return (
    <div className="mb-28">
      <div className="mt-32 flex justify-center font-Yek-ExtraBlack text-4xl text-primary-300">
        <h1>سوالات متداول</h1>
      </div>
      <div className="flex justify-center text-lg mt-4 font-Yek-Regular text-gray-700">
        <span>لیستی از پرسش و پاسخ‌های که شاید با آن مواجه شوید</span>
      </div>
      <div className="mt-12 px-40 flex flex-col gap-y-8">
        <div
          className={
            accordion === 1
              ? "w-full h-48 border-2 rounded-xl transition-all duration-300 overflow-hidden"
              : "w-full h-16 border-2 rounded-xl transition-all duration-300 overflow-hidden"
          }
          onClick={() => {
            accordion !== 1 ? setAccordion(1) : setAccordion(0);
          }}
        >
          <div className="flex justify-between items-center px-4 pt-4">
            <div className="text-lg font-Yek-SemiBold text-gray-700">
              <h1>معرفی اولین سامانه ایرانی نگهداری ارزهای دیجیتال ؟ </h1>
            </div>
            <div>
              <button
                className={
                  accordion === 1
                    ? "-rotate-90 transition-all duration-300"
                    : "rotate-0 transition-all duration-300"
                }
              >
                <IoIosArrowBack size={25} color="#333" />
              </button>
            </div>
          </div>
          {/* {accordion === 1 && ( */}
            <div
              className={
                accordion === 1
                  ? "py-4 px-6 text-md font-Yek-Light block opacity-100 "
                  : "py-4 px-6 text-md font-Yek-Light none opacity-100"
              }
            >
              <hr />
              <div className="text-justify pt-3 transition-all duration-300">
                <span
                  className={
                    accordion === 1
                      ? "transition-all duration-300 opacity-100"
                      : "transition-all duration-300 opacity-100"
                  }
                >
                  کیف پول من ، اولین سامانه نگهداری ارزهای دیجیتال پیشگامِ کشور
                  است که با سبک و استانداردهای جدید، سرویس های نگهداری رمز
                  ارزهای الکترونیک را برای افراد حقیقی و حقوقی اماده کرده است.
                  ما هر روزه، هزاران تراکنش واریزی و دریافتی را در بستر کیف پول
                  من ، بدون کوچکترین خطایی به گردش در می آوریم، با این هدف که در
                  افزایش سهم تجارت الکترونیکی در تولید ناخالص ملی و کمک به رشد و
                  توسعه ی کسب وکارها، نقش سازنده و موثری داشته باشیم. امروز کیف
                  پول من نقش موثری در رشد و ارتقاء کیفیت خرید و فروش ارز دیجیتال
                  در بازار کشور را دارد .
                </span>
              </div>
            </div>
          {/* )} */}
        </div>
        <div
          className={
            accordion === 2
              ? "w-full h-48 border-2 rounded-xl transition-all duration-300 overflow-hidden"
              : "w-full h-16 border-2 rounded-xl transition-all duration-300 overflow-hidden"
          }
          onClick={() => {
            accordion !== 2 ? setAccordion(2) : setAccordion(0);
          }}
        >
          <div className="flex justify-between items-center px-4 pt-4">
            <div className="text-lg font-Yek-SemiBold text-gray-700">
              <h1>معرفی اولین سامانه ایرانی نگهداری ارزهای دیجیتال ؟ </h1>
            </div>
            <div>
              <button
                className={
                  accordion === 2
                    ? "-rotate-90 transition-all duration-300"
                    : "rotate-0 transition-all duration-300"
                }
              >
                <IoIosArrowBack size={25} color="#333" />
              </button>
            </div>
          </div>
          {/* {accordion === 1 && ( */}
            <div
              className={
                accordion === 2
                  ? "py-4 px-6 text-md font-Yek-Light block opacity-100 "
                  : "py-4 px-6 text-md font-Yek-Light none opacity-100"
              }
            >
              <hr />
              <div className="text-justify pt-3 transition-all duration-300">
                <span
                  className={
                    accordion === 2
                      ? "transition-all duration-300 opacity-100"
                      : "transition-all duration-300 opacity-100"
                  }
                >
                  کیف پول من ، اولین سامانه نگهداری ارزهای دیجیتال پیشگامِ کشور
                  است که با سبک و استانداردهای جدید، سرویس های نگهداری رمز
                  ارزهای الکترونیک را برای افراد حقیقی و حقوقی اماده کرده است.
                  ما هر روزه، هزاران تراکنش واریزی و دریافتی را در بستر کیف پول
                  من ، بدون کوچکترین خطایی به گردش در می آوریم، با این هدف که در
                  افزایش سهم تجارت الکترونیکی در تولید ناخالص ملی و کمک به رشد و
                  توسعه ی کسب وکارها، نقش سازنده و موثری داشته باشیم. امروز کیف
                  پول من نقش موثری در رشد و ارتقاء کیفیت خرید و فروش ارز دیجیتال
                  در بازار کشور را دارد .
                </span>
              </div>
            </div>
    
        </div>
        <div
          className={
            accordion === 3
              ? "w-full h-48 border-2 rounded-xl transition-all duration-300 overflow-hidden"
              : "w-full h-16 border-2 rounded-xl transition-all duration-300 overflow-hidden"
          }
          onClick={() => {
            accordion !== 3 ? setAccordion(3) : setAccordion(0);
          }}
        >
          <div className="flex justify-between items-center px-4 pt-4">
            <div className="text-lg font-Yek-SemiBold text-gray-700">
              <h1>معرفی اولین سامانه ایرانی نگهداری ارزهای دیجیتال ؟ </h1>
            </div>
            <div>
              <button
                className={
                  accordion === 3
                    ? "-rotate-90 transition-all duration-300"
                    : "rotate-0 transition-all duration-300"
                }
              >
                <IoIosArrowBack size={25} color="#333" />
              </button>
            </div>
          </div>
          {/* {accordion === 1 && ( */}
            <div
              className={
                accordion === 3
                  ? "py-4 px-6 text-md font-Yek-Light block opacity-100 "
                  : "py-4 px-6 text-md font-Yek-Light none opacity-100"
              }
            >
              <hr />
              <div className="text-justify pt-3 transition-all duration-300">
                <span
                  className={
                    accordion === 3
                      ? "transition-all duration-300 opacity-100"
                      : "transition-all duration-300 opacity-100"
                  }
                >
                  کیف پول من ، اولین سامانه نگهداری ارزهای دیجیتال پیشگامِ کشور
                  است که با سبک و استانداردهای جدید، سرویس های نگهداری رمز
                  ارزهای الکترونیک را برای افراد حقیقی و حقوقی اماده کرده است.
                  ما هر روزه، هزاران تراکنش واریزی و دریافتی را در بستر کیف پول
                  من ، بدون کوچکترین خطایی به گردش در می آوریم، با این هدف که در
                  افزایش سهم تجارت الکترونیکی در تولید ناخالص ملی و کمک به رشد و
                  توسعه ی کسب وکارها، نقش سازنده و موثری داشته باشیم. امروز کیف
                  پول من نقش موثری در رشد و ارتقاء کیفیت خرید و فروش ارز دیجیتال
                  در بازار کشور را دارد .
                </span>
              </div>
            </div>
          {/* )} */}
        </div>
        <div
          className={
            accordion === 4
              ? "w-full h-48 border-2 rounded-xl transition-all duration-300 overflow-hidden"
              : "w-full h-16 border-2 rounded-xl transition-all duration-300 overflow-hidden"
          }
          onClick={() => {
            setAccordion(accordion !== 4 ? 4 : 0)
          }}
        >
          <div className="flex justify-between items-center px-4 pt-4">
            <div className="text-lg font-Yek-SemiBold text-gray-700">
              <h1>معرفی اولین سامانه ایرانی نگهداری ارزهای دیجیتال ؟ </h1>
            </div>
            <div>
              <button
                className={
                  accordion === 1
                    ? "-rotate-90 transition-all duration-300"
                    : "rotate-0 transition-all duration-300"
                }
              >
                <IoIosArrowBack size={25} color="#333" />
              </button>
            </div>
          </div>
          {/* {accordion === 1 && ( */}
            <div
              className={
                accordion === 4
                  ? "py-4 px-6 text-md font-Yek-Light block opacity-100 "
                  : "py-4 px-6 text-md font-Yek-Light none opacity-100"
              }
            >
              <hr />
              <div className="text-justify pt-3 transition-all duration-300">
                <span
                  className={
                    accordion === 4
                      ? "transition-all duration-300 opacity-100"
                      : "transition-all duration-300 opacity-100"
                  }
                >
                  کیف پول من ، اولین سامانه نگهداری ارزهای دیجیتال پیشگامِ کشور
                  است که با سبک و استانداردهای جدید، سرویس های نگهداری رمز
                  ارزهای الکترونیک را برای افراد حقیقی و حقوقی اماده کرده است.
                  ما هر روزه، هزاران تراکنش واریزی و دریافتی را در بستر کیف پول
                  من ، بدون کوچکترین خطایی به گردش در می آوریم، با این هدف که در
                  افزایش سهم تجارت الکترونیکی در تولید ناخالص ملی و کمک به رشد و
                  توسعه ی کسب وکارها، نقش سازنده و موثری داشته باشیم. امروز کیف
                  پول من نقش موثری در رشد و ارتقاء کیفیت خرید و فروش ارز دیجیتال
                  در بازار کشور را دارد .
                </span>
              </div>
            </div>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default Question;
