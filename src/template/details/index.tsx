import { FC } from "react";
// import LockIcon from "../../assets/images/lock.webp";
import DetailsSlider from "../../module/DetailsSlider";

const Details: FC = () => {
  return (
    <div className="mt-28">
      <div className="flex flex-col items-center gap-y-2">
        <h1 className="text-4xl text-primary-300 font-Yek-ExtraBlack">
          برای اولین بار درایران
        </h1>
        <span className="text-lg text-gray-700 font-Yek-SemiBold">
          خرید آنلاین انواع محصولات با امکان
          <span className="font-Yek-Bold text-orange-300">
            پرداخت ارز دیجیتال
          </span>
        </span>
      </div>
      <div className="mt-12 container">
        <DetailsSlider />
      </div>
    </div>
  );
};

export default Details;
