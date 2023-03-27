import styled from "@emotion/styled";
import { mainCol_1 } from "../../../utils/color";
import { headertitle } from "../../../utils/font";
export const HeaderCss = styled.header`
  position: fixed;
  width: 100%;
  z-index: 9099999;
  left: 0;
  .headerWrap {
    width: 100%;
    height: 100px;
    padding: 30px 0;
    padding-left: 40px;
    display: flex;
    align-items: center;
    background-color: #ebfff0;
    > ul {
      position: relative;
      display: flex;
      align-items: center;
      > li {
        .line {
          margin: 0 10px;
          padding-bottom: 5px;
          display: block;
        }
        > a {
          display: block;
          > h1 {
            display: inline-block;
          }
        }
      }
    }
    .gnbBtn {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      background-color: transparent;
      border: 0;
      font-size: 2rem;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;
