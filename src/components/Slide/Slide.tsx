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
import { SlideCss } from "./SlideCss";
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
      <SlideCss>
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
              <img src={fullpage1} alt="SUTABUCKS" />
              <div className="overlay">
                <div>
                  <div>
                    <h2>SUTABUCKS</h2>
                    <span>배달 웹 프로그램</span>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/ggobook">
              <img src={fullpage2} alt="GGOBOOK" />
              <div className="overlay">
                <div>
                  <div>
                    <h2>GGOBOOK</h2>
                    <span>독서 일정 관리 웹</span>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/methedu">
              <img src={""} alt="METHEDU" />
              <div className="overlay">
                <div>작업 진행 중입니다!</div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/binggrae">
              <img src={fullpage4} alt="BINGGRAE" />
              <div className="overlay">
                <div>
                  <div>
                    <h2>BINGGRAE</h2>
                    <span>빙그레 클론코딩</span>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/hansalim">
              <img src={fullpage5} alt="HANSALIM" />
              <div className="overlay">
                <div>
                  <div>
                    <h2>HANSALIM</h2>
                    <span>한살림 클론코딩</span>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <div className="overlay">
              <div>추가 예정 입니다!</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="overlay">
              <div>추가 예정 입니다!</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </SlideCss>
      <div className="swiperButton">
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
      </div>
    </>
  );
};

export default Slide;
