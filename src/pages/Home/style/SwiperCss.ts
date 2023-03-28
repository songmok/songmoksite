import styled from "@emotion/styled";
import { minFontSize } from "../../../utils/font";

export const SwiperCss = styled.div`
  position: relative;
  background-color: #92e0eb;
  padding-top: 100px;
  height: 80vh;
  display: grid;
  align-items: center;
  .work {
    width: 100%;
    display: flex;
    justify-content: center;
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
    width: 45%;
    height: 600px;
    overflow: hidden;
    align-self: flex-start;
    border: 2px solid #333;
    border-radius: 30px;
    .swiper-slide {
      width: 100%;
      height: 100%;
      text-align: center;
      font-size: 1.8rem;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      > a {
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
    display: flex;
    justify-content: space-between;
    align-self: flex-start;
    white-space: nowrap;
    > div {
      button {
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
`;
