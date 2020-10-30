import { css } from '@emotion/core';

export const inputStyled = css`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid rgba(61, 74, 138, 0.42);
  border-radius: 4px;
  padding: 0 1em;
  position: relative;
  width: 100%;
  max-width: 600px;

  ::placeholder {
    font: normal normal medium 14px/17px Inter;
    font-size: 1.4rem;
    font-weight: bold;
    color: #555555;
    opacity: 1;
    top: 0;
  }
  &:focus {
    padding-top: 0.5em;
    outline: none;
    border: 1px solid #3c498a;
    ::placeholder {
      font-size: 1rem;
      position: relative;
      top: -1.5em;
      color: #3c498a;
      transition: all 0.1s ease-in;
      transition-property: top, color, font-size;
    }
  }
`;

export const dropdownStyled = css`
  position: relative;
  width: 100%;
  max-width: 600px;

  div:nth-of-type(1) {
    position: relative;
    button {
      cursor: pointer;
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid rgba(61, 74, 138, 0.42);
      border-radius: 4px;
      padding: 0 1em;
      height: 49px;
      width: 100%;
    }

    label {
      cursor: pointer;
      position: absolute;
      top: 50%;
      left: 1em;
      transform: translate(0, -50%);

      font: normal normal medium 14px/17px Inter;
      font-size: 1.4rem;
      font-weight: bold;
      color: #555555;
      opacity: 1;
    }

    > div {
      > label {
        position: absolute;
        font-size: 1rem;
        font-weight: medium;
        color: #3c498a;
        top: 1.5em;
        left: 1.2em;
      }
      > p {
        position: absolute;
        top: 1.7em;
        left: 0.8em;
        font-size: 1.4rem;
        font-weight: medium;
      }
    }

    > img {
      cursor: pointer;
      position: absolute;
      top: 40%;
      right: 1.4rem;
    }
  }
  > ul {
    position: absolute;
    top: 40px;
    z-index: 10;
    list-style: none;
    padding: 0;
    outline: none;
    width: 100%;
    > li {
      font: normal normal medium 14px/17px Inter;
      font-size: 1.4rem;
      font-weight: bold;
      color: #555555;
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #ececec;
      height: 49px;
      width: 328px;
      line-height: 3em;
      padding: 0 1em;
      width: 100%;
    }
    >li: first-of-type {
      border-radius: 4px 4px 0px 0px;
    }
    > li:last-of-type {
      border-radius: 0px 0px 4px 4px;
    }
  }
`;
