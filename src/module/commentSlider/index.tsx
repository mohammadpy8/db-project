import { FC, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css'

const CommetsSlider: FC = () => {
  const prevRef = useRef<null | string>(null)
  const nextRef = useRef<null | string>(null)
  return (
    <>
      <Swiper
        centeredSlides={true}
        spaceBetween={150}
        slidesPerView={3}
        grabCursor={true}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 500 }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-[500px] border-2 rounded-lg h-[200px] my-12"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[500px] border-2 rounded-lg h-[200px] my-12"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[500px] border-2 rounded-lg h-[200px] my-12"></div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default CommetsSlider
