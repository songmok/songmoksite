import styled from "@emotion/styled";
export const FooterCss = styled.footer`
  height: 118px;
  div {
    width: 100%;
    height: 100%;
    cursor: pointer;
    background-color: #25055a;
    display: flex;
    justify-content: center;
    &:hover {
      background-color: #25033a;
    }
    &:hover h2 {
      text-decoration: underline;
      color: white;
    }
    h2 {
      height: 0;
      padding: 0;
      display: block;
      font-size: 3rem;
      line-height: 118px;
      color: #adc4f7;
    }
  }
`;
