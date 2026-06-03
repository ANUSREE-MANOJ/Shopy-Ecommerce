import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function HeroSlider() {
  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      title: "Smart Watches Collection",
    },

    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      title: "Premium Headphones",
    },

    
    
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      title: "Trending Shoes",
    },

    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
      title: "Fashion Collection",
    },
  ];

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      loop={true}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative h-[500px]">

            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

              <h1 className="text-white text-5xl font-bold">
                {slide.title}
              </h1>

            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HeroSlider;