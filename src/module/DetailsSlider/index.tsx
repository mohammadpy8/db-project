import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import LockIcon from "../../assets/images/lock.webp";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const DetailsSlider: FC = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <div className="w-24 h-24 rounded-full detailsSider relative"></div>
          <div className="">
            <img
              src={LockIcon}
              alt="lockicon"
              className="absolute top-[1450px] right-44"
            />
          </div>
          <div className="w-64 h-40 blur-sm absolute top-[1500px] right-32 cartDetails"></div>
          <div className="info text-gray-700 flex flex-col items-center absolute mt-8 right-36 gap-y-2">
            <h1 className="text-lg font-Yek-SemiBold">
              بالا ترین امنیت برداشت
            </h1>
            <span className="text-sm font-Yek-Regular">
              قفل برداشت ارز و تایید انتقال با تماس
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-24 h-24 rounded-full detailsSider relative"></div>
          <div className="">
            <img
              src={LockIcon}
              alt="lockicon"
              className="absolute top-[1450px] right-44"
            />
          </div>
          <div className="w-64 h-40 blur-sm absolute top-[1500px] right-32 cartDetails"></div>
          <div className="info text-gray-700 flex flex-col items-center absolute mt-8 right-36 gap-y-2">
            <h1 className="text-lg font-Yek-SemiBold">
              بالا ترین امنیت برداشت
            </h1>
            <span className="text-sm font-Yek-Regular">
              قفل برداشت ارز و تایید انتقال با تماس
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-24 h-24 rounded-full detailsSider relative"></div>
          <div className="">
            <img
              src={LockIcon}
              alt="lockicon"
              className="absolute top-[1450px] right-44"
            />
          </div>
          <div className="w-64 h-40 blur-sm absolute top-[1500px] right-32 cartDetails"></div>
          <div className="info text-gray-700 flex flex-col items-center absolute mt-8 right-36 gap-y-2">
            <h1 className="text-lg font-Yek-SemiBold">
              بالا ترین امنیت برداشت
            </h1>
            <span className="text-sm font-Yek-Regular">
              قفل برداشت ارز و تایید انتقال با تماس
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-24 h-24 rounded-full detailsSider relative"></div>
          <div className="">
            <img
              src={LockIcon}
              alt="lockicon"
              className="absolute top-[1450px] right-44"
            />
          </div>
          <div className="w-64 h-40 blur-sm absolute top-[1500px] right-32 cartDetails"></div>
          <div className="info text-gray-700 flex flex-col items-center absolute mt-8 right-36 gap-y-2">
            <h1 className="text-lg font-Yek-SemiBold">
              بالا ترین امنیت برداشت
            </h1>
            <span className="text-sm font-Yek-Regular">
              قفل برداشت ارز و تایید انتقال با تماس
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default DetailsSlider;
