import { createGlobalStyle } from "styled-components";

export const colors = {
  black: "#000000",
  white: " #ffffff",
};

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration:none;
  }  

  li, ul {
    list-style:none;
    margin: 0;
    padding: 0;
  }

 
`;
