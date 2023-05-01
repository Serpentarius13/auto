"use client";

const slides: TSlide[] = [
  {
    image: "/img/header/kia.png",
    imageAlt: "Картинка с зеленой Kia Rio",
    title: "Kia rio",
    price: "2000",
  },
  {
    image: "/img/header/kia.png",
    imageAlt: "Картинка с зеленой Kia Rio",
    title: "Kia rio",
    price: "2000",
  },

  {
    image: "/img/header/kia.png",
    imageAlt: "Картинка с зеленой Kia Rio",
    title: "Kia rio",
    price: "2000",
  },

  {
    image: "/img/header/kia.png",
    imageAlt: "Картинка с зеленой Kia Rio",
    title: "Kia rio",
    price: "2000",
  },

  {
    image: "/img/header/kia.png",
    imageAlt: "Картинка с зеленой Kia Rio",
    title: "Kia rio",
    price: "2000",
  },
  {
    image: "/img/header/kia.png",
    imageAlt: "Картинка с зеленой Kia Rio",
    title: "Kia rio",
    price: "2000",
  },
];

import Image from "next/image";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { useEffect, useMemo, useRef, useState } from "react";

export type TSlide = {
  title: string;
  price: string;
  image: string;
  imageAlt: string;
};

interface IBannerSwiperProps {
  slides: TSlide[];
}

const bannerNavigation: string[] = [
  "Kia Rio АКПП",
  "Оборудование",
  "Mazda 3",
  "Renault Duster",
  "Весенние скидки",
  "Renault Logan",
];

export default function Banner() {
  const swiperRef = useRef<any | null>(null);

  const [key, setKey] = useState<number>(0);

  useEffect(() => {
    setKey(Math.random())
  }, [])

  return (
    <section className="relative w-screen h-screen pb-[5rem]">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="w-full h-full min-h-full banner-swiper relative overflow-visible  shadow-lg "
        ref={swiperRef}
        onSlideChange={() => setKey(Math.random())}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title} className="relative w-full h-full ">
            <article className="bg-[#00000059] min-h-[32.8rem] px-[2rem] py-[1.35rem]  text-white font-bold flex flex-col justify-between absolute top-[15%] left-[15%] z-[1]">
              <div>
                <h2 className="text-[6.4rem] pb-[0.8rem] ">{slide.title}</h2>

                <h3 className="text-[3.6rem] ">
                  от {slide.price} р/<i>сутки*</i>
                </h3>
              </div>
              <p className="italic text-[1.6rem] max-w-[33rem]">
                *Колличество автомобилей участвующих в акции ограниченно.
                Наличие акционных авто уточняйте у менеджеров.
              </p>
            </article>
            <Image
              src={slide.image}
              alt={slide.imageAlt}
              fill
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <nav className="w-full pt-[2rem] swiper-bg-gradi absolute bottom-[4rem] z-[2]">
        <ul className="flex items-center justify-center gap-[7rem]">
          {bannerNavigation.map((nav, ix) => (
            <li key={nav} className="text-[1.8rem] font-bold ">
              {" "}
              <button
                className={
                  ix == swiperRef?.current?.swiper?.realIndex
                    ? "text-red transition-all"
                    : "text-black transition-all"
                }
                onClick={() => swiperRef?.current?.swiper?.slideTo(ix)}
              >
                {" "}
                {nav}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
