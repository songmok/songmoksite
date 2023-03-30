import styled from "@emotion/styled";
export const SlideCss = styled.div`
  .swiper-slide {
    position: relative;
  }
  .swiper-slide:hover .overlay {
    opacity: 1;
  }

  .swiper-slide:hover h2 {
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
  }
  h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 2rem;
    opacity: 0;
    transition: opacity 0.5s ease;
  }
`;
