import { FC, useEffect, useState } from "react";
import Button from "../../interface/Button";
import { RiUserLine } from "react-icons/ri";
import ScrollIndicator from "../../module/scrollIndicator";
import SliderHeader from "../sliderHeader";

const Header: FC = () => {
  const clickHandler = () => {};

  const [scrollCount, setScrollCount] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScroll = window.scrollY > 104;
      setScrollCount(isScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);

  console.log(window.scrollY);

  return (
    <>
    <SliderHeader />
      <div className={scrollCount ? "w-full bg-gray-100 z-50 sticky top-0 transition-all duration-500" : "w-full bg-gray-100 z-50 sticky transition-all duration-500"}>
        <div className="container w-full border-b-[1px] border-gray-200 h-16 flex justify-between items-center">
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
            <Button styles="" clickHandler={clickHandler}>
              <h1 className="font-Yek-Bold text-primary-100 border-[1px] p-3 rounded-lg">
                ورود
              </h1>
            </Button>
            <Button
              styles="flex items-center gap-x-2 bg-primary-100 p-3 rounded-lg"
              clickHandler={clickHandler}
            >
              <RiUserLine color="#fff" size={25} />
              <h1 className="text-white font-Yek-Bold">ثبت نام</h1>
            </Button>
          </div>
        </div>
        <ScrollIndicator />
      </div>
    </>
  );
};

export default Header;
