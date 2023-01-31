import { createGlobalStyle } from "styled-components";

export const colors = {
  black: "#000000",
  white: " #ffffff",
  whiteGray: " #f1f1f1",
  gray: "#707070",
  mediumGrey: "#303030",
  darkerGray: "#1f1f1f",
  blue: "#3fa9f5",
  green: "#bada55",
};

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
  }

  a {
    text-decoration:none;
    color: ${colors.black};
  }  

  li, ul {
    list-style:none;
    margin: 0;
    padding: 0;
  }

 
`;
