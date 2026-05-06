import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const banners = [
  "/photos/g1.jpg",
  "/photos/g2.jpg",
  "/photos/g3.jpg",
  "/photos/g4.jpg",
  "/photos/g5.jpg",
];

export default function Slider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      loop
      className="mySwiper"
    >
      {banners.map((b, i) => (
        <SwiperSlide key={i}>
          <img src={b} className="banner-img" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}