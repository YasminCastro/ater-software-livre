import { createGlobalStyle } from "styled-components";

export const colors = {
  black: "#000000",
  white: " #ffffff",
  grey: "#707070",
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
