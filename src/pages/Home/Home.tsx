import React, { useRef, useState } from "react";
// fonntawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { GnbData } from "../../assets/data/GnbData";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation, Keyboard } from "swiper";
import { Button } from "../../utils/repeat";
import { HomeCss } from "./style/HomeCss";
import Header from "../../components/common/Header/Header";
import { SwiperCss } from "./style/SwiperCss";
import { ReplitCss } from "./style/ReplitCss";
import fullpage1 from "../../assets/images/project/fullpage1.png";
type Props = {};

const Home = (props: Props) => {
  const [swiperRef, setSwiperRef] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const slideTo = (i: number) => {
    swiperRef.slideTo(i - 1, 300);
  };

  const navigateNext = () => {
    swiperRef.slideNext();
  };

  const navigatePrev = () => {
    swiperRef.slidePrev();
  };

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <>
      <HomeCss>
        <Header headerText={""} headerLink={"/"} ngnb={0} />
        <SwiperCss>
          <div className="work">
            <span>작 업 물</span>
          </div>
          <button
            className="swiper-button-prev arrowBtn"
            onClick={navigatePrev}
          >
            <FontAwesomeIcon icon={faCaretLeft} />
          </button>
          <Swiper
            keyboard={true}
            slidesPerView={1}
            modules={[Pagination, Keyboard]}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
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
              <Link to="/ggobook">꼬북</Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/methedu">metaedu</Link>
            </SwiperSlide>
            <SwiperSlide>추가</SwiperSlide>
            <SwiperSlide>추가</SwiperSlide>
            <SwiperSlide>추가</SwiperSlide>
            <SwiperSlide>추가</SwiperSlide>
          </Swiper>
          <button
            className="swiper-button-next arrowBtn"
            onClick={navigateNext}
          >
            <FontAwesomeIcon icon={faCaretRight} />
          </button>
          <p className="swiperButton">
            {GnbData.map((v, i) => {
              return (
                <Button key={i}>
                  <button
                    className={`${activeIndex === i ? "active" : ""}`}
                    onClick={() => {
                      slideTo(v.id);
                    }}
                  >
                    {v.name}
                  </button>
                </Button>
              );
            })}
          </p>
        </SwiperCss>
        <ReplitCss>
          <Link to="/study">자세히보기</Link>
        </ReplitCss>
      </HomeCss>
    </>
  );
};

export default Home;
