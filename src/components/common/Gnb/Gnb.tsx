import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { GnbCss } from "./GnbCss";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Keyboard } from "swiper";
import { Button } from "../../../utils/repeat";
import { GnbData } from "../../../assets/data/GnbData";
import fullpage1 from "../../../assets/images/project/fullpage1.png";
import fullpage2 from "../../../assets/images/project/fullpage2.png";
import fullpage4 from "../../../assets/images/project/fullpage4.png";

export interface toggle {
  showGnb: boolean;
}

const Gnb = ({ showGnb }: toggle) => {
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
      <GnbCss>
        <div className={`workWrap${showGnb ? " show wow fadeIn" : ""}`}>
          <div className="work">
            <span>작 업 물</span>
          </div>
          <Swiper
            keyboard={true}
            slidesPerView={1}
            modules={[Pagination, Keyboard]}
            onSwiper={setSwiperRef}
            onSlideChange={handleSlideChange}
            loop={true}
            className="mySwiper"
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
                <img src={""} alt="" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="#">추가예정</Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="#">추가예정</Link>
            </SwiperSlide>
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
        </div>
      </GnbCss>
    </>
  );
};

export default Gnb;
