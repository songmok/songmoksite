import styled from "@emotion/styled";

export const Button = styled.span`
  display: block;
  z-index: 99;

  button {
    padding: 2rem;
    border: 0.1rem #fff solid;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    background-color: #004c7f;
    &:hover {
      border: 0.1rem #6c7e05 solid;
      color: #fff;
      background-color: #004c7f;
    }
  }
`;
