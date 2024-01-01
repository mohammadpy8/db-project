import { FC } from "react";

const ArzShop: FC = () => {
  return (
    <div className="container mt-6">
      <div className="space-y-4 px-4 py-2">
        <div>
          <h1 className="text-4xl text-primary-300 font-Yek-ExtraBlack">
            خرید ارز
          </h1>
        </div>
        <div>
          <span className="text-2xl font-Yek-ExtraBold">
            خرید انواع ارز در فروشگاه ارز دیجیتال ایرانیان
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center mt-8">
        <div>
          <div className="flex items-center gap-x-2">
            <h1 className="text-xl font-Yek-Bold">مرتب سازی براساس:</h1>
            <div className="bg-gray-200 flex gap-x-4 text-xl px-6 py-4 rounded-lg shadow-md font-Yek-ExtraBlack">
              <div>ارزان ترین</div>
              <div>گران ترین</div>
              <div> باتخفیف</div>
            </div>
          </div>
        </div>
        <div className="w-[60%] relative">
          <input
            className="w-full outline-none border-[3px] border-gray-400 border-solid transition-all focus:border-primary-300  placeholder:text-gray-400 placeholder:select-none text-sm py-3 rounded-xl placeholder:text-right pr-12 pl-3 bg-white"
            placeholder="جست و جو در میان ارز ها..."
            type="text"
          />
          <span className="flex justify-center items-center absolute top-1/2 -translate-y-1/2 border-solid transition-all border-cnBlack-10 dark:border-gray-300 pl-2 right-3 border-l-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="transition-all w-5 h-5 md:w-6 md:h-6 text-cnBlack-10 dark:text-gray-300"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArzShop;
