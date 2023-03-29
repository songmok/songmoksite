import styled from "@emotion/styled";
export const ReplitCss = styled.div`
  text-align: center;
  display: flex;
  height: 100px;
  a {
    display: block;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:nth-child(1) {
      background-color: black;
      > span {
        color: white;
      }
    }
    &:nth-child(2) {
      background-color: coral;
      > span {
        color: white;
      }
    }
    span {
      font-size: 3rem;
      img {
        width: 50px;
        padding-right: 20px;
      }
    }
  }
`;
