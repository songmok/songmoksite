import styled from "@emotion/styled";
export const SlideCss = styled.div`
  .swiper-slide {
    position: relative;
  }
  .swiper-slide:hover .overlay {
    opacity: 1;
  }

  .swiper-slide:hover div {
    opacity: 1;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.5s ease;
    > div {
      color: white;
      opacity: 0;
      transition: opacity 0.5s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      > p {
        display: block;
        > h2 {
          display: block;
          padding-bottom: 50px;
        }
        > span {
          display: block;
        }
      }
    }
  }
`;
