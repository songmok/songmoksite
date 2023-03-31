import styled from "@emotion/styled";
export const NotionCss = styled.div`
  text-align: center;
  display: flex;
  height: 100px;
  > a {
    background-color: black;
    width: 100%;
    height: 100%;
    &:hover {
      background-color: #333;
    }
    &:hover span h2 {
      text-decoration: underline;
      color: white;
    }
    span {
      display: flex;
      justify-content: center;
      height: 100%;
      img {
        width: 30px;
        display: block;
        align-self: center;
        margin-right: 10px;
      }
      h2 {
        font-size: 3rem;
        line-height: 100px;
        color: #adc4f7;
      }
    }
  }
`;
