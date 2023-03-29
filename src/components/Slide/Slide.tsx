import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { GnbData } from "../../assets/data/GnbData";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Keyboard } from "swiper";
import { Button } from "../../utils/repeat";
import fullpage1 from "../../assets/images/project/fullpage1.png";
import fullpage2 from "../../assets/images/project/fullpage2.png";
import fullpage4 from "../../assets/images/project/fullpage4.png";
import fullpage5 from "../../assets/images/project/fullpage5.png";
export interface toggle {
  showGnb?: boolean;
}
const Slide = ({ showGnb }: toggle) => {
  const [swiperRef, setSwiperRef] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const slideTo = (i: number) => {
    swiperRef.slideTo(i, 300);
  };
  const handleBtnClick = (i: number) => {
    slideTo(i); // 스와이퍼 슬라이드 이동
    setActiveIndex(i); // 활성화 상태 변경
  };
  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };
  return (
    <>
      <div className="work">
        <span>작 업 물</span>
      </div>
      <Swiper
        keyboard={true}
        slidesPerView={1}
        modules={[Pagination, Keyboard]}
        onSwiper={setSwiperRef}
        onSlideChange={handleSlideChange}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide>
          <Link to="/sutabucks">
            <img src={fullpage1} alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/ggobook">
            <img src={fullpage2} alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/methedu">metaedu</Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/binggrae">
            <img src={fullpage4} alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/hansalim">
            <img src={fullpage5} alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>추가예정</SwiperSlide>
        <SwiperSlide>추가예정</SwiperSlide>
      </Swiper>
      <p className="swiperButton">
        {GnbData.map((v, i) => {
          return (
            <Button key={i}>
              <button
                className={`${activeIndex === i ? "active" : ""}`}
                onClick={() => {
                  handleBtnClick(i);
                }}
              >
                {v.name}
              </button>
            </Button>
          );
        })}
      </p>
    </>
  );
};

export default Slide;
