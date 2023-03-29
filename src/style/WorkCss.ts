import styled from "@emotion/styled";
import { defaltFontSize, middleFontSize, standFontSize } from "../utils/font";
export const WorkCss = styled.section`
  position: relative;
  display: flex;
  background-color: #f4eed3;
  .c1 {
    width: 50%;
    height: calc(100vh - 100px);
    position: relative;
    display: flex;
    .video {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 85%;
    }
    iframe {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .c2 {
    width: 50%;
    height: calc(100vh - 100px);
    position: relative;
    display: grid;
    > ul {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 85%;
      height: 65%;
      > li {
        padding-bottom: 30px;
        display: flex;
        align-items: center;
        .projectHeader {
          font-size: ${middleFontSize};
          padding-right: 7px;
          width: 150px;
          & + span {
            font-size: ${middleFontSize};
            font-weight: bold;
            color: #4a154b;
            & + .gitLink {
              width: 50px;
              img {
                width: 100%;
              }
            }
          }
          & + .mfText {
            font-size: ${defaltFontSize};
            line-height: 3rem;
            width: 52%;
            .ps {
              height: 0;
              display: block;
              text-align: right;
              font-size: ${standFontSize};
              color: #000 !important;
            }
          }
          & + .dayz {
            display: inline-block;
            font-size: ${defaltFontSize};
            > span {
            }
          }
          & + .myWorks {
            font-size: ${defaltFontSize};
          }
        }
        .imgheader {
          display: block;
        }
        > ul {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          align-items: center;
          width: 300px;
          position: relative;
          &::after {
            content: "";
            width: 100%;
            height: 1px;
            position: absolute;
            left: 0;
            bottom: 0;
            background-color: #afafaf;
          }
          > li {
            display: grid;
            grid-template-columns: repeat(1fr);
            justify-items: center;
            margin-bottom: 20px;
            img {
              display: block;
              height: 50px;
              margin-bottom: 10px;
            }
            span {
              font-size: 1.3rem;
              white-space: nowrap;
            }
          }
        }
      }
    }
  }
`;
