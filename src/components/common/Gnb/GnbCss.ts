import styled from "@emotion/styled";
import { mainCol_1, mainCol_2 } from "../../../utils/color";
import { minFontSize } from "../../../utils/font";
export const GnbCss = styled.div`
  padding-top: 100px;
  .workWrap {
    position: fixed;
    width: 100%;
    height: 450px;
    ${mainCol_2}
    justify-content: center;
    transition: max-height 0.3s ease-in-out;
    max-height: 0;
    overflow: hidden;
    z-index: 9999;
    &.show {
      max-height: 100vh;
    }
    .work {
      width: 100%;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      span {
        position: relative;
        font-size: 3.3rem;
        color: #333;
        font-weight: bold;
        z-index: 6;
        &::after {
          content: "";
          width: 100%;
          height: 10px;
          background-color: #fff;
          position: absolute;
          bottom: 0px;
          right: -5px;
          z-index: -1;
        }
      }
    }
    .swiper {
      width: 24%;
      height: 300px;
      overflow: hidden;
      border-radius: 10px;
      border: 2px solid #444;
      .swiper-slide {
        width: 100%;
        height: 100%;
        text-align: center;
        font-size: 18px;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        a {
          display: block;
          width: 100%;
          height: 100%;
          display: flex;
          > img {
            width: 100%;
            display: block;
          }
        }
      }
    }
    .swiperButton {
      position: relative;
      margin: 0px auto;
      width: 40%;
      height: 80px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      white-space: nowrap;
      > div {
        button {
          padding: 1rem;
          ${minFontSize}
          display: block;
          &.active {
            border: 1px solid #007acc;
            background-color: #007acc;
            color: #fff;
          }
        }
      }
    }
    .swiper-button-next {
      right: 30%;
    }
    .swiper-button-prev {
      left: 30%;
    }
  }
`;
