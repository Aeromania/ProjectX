import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { TCarouselInfoArrayProps } from "@/pages/Workshop/School/SchoolCarouselData";
import "./carousel.css";
import { useState } from "react";

type CarouselProps = {
  infoArray: TCarouselInfoArrayProps[];
};

export const Carousel: React.FC<CarouselProps> = ({
  infoArray
}): React.JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        navigation={{
          disabledClass: "hide-swiper"
        }}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          scale: 0.5
        }}
        pagination={{
          clickable: true
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex + 1)}
      >
        {infoArray &&
          infoArray.map((carousel) => (
            <SwiperSlide key={carousel.id}>
              <img src={carousel.imageUrl} className="rounded-md" />
            </SwiperSlide>
          ))}
      </Swiper>
      {infoArray &&
        infoArray.map((carousel) => {
          if (carousel.id === activeIndex) {
            return (
              <>
                <h1 className="mb-4 mt-2 text-center font-serif md:text-2xl">
                  {carousel.title}
                </h1>
                <p className="w-[95%] text-center font-sans md:w-[75%] md:text-start md:text-xl xl:w-[60%]">
                  {carousel.body}
                </p>
              </>
            );
          } else {
            return <></>;
          }
        })}
    </>
  );
};
