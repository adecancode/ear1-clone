import React from "react";
import { SvgXml } from "react-native-svg";
  
export default function Acc(){  
  const svgMarkup = `
  

  

  <svg width="25" height="30" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4684 3.08843C17.1475 3.46495 19.023 5.95383 18.6465 8.63296C18.2699 11.3121 15.7811 13.1876 13.1019 12.8111C10.4228 12.4345 8.54732 9.94565 8.92384 7.26653C9.30037 4.5874 11.7892 2.7119 14.4684 3.08843Z" stroke="#00BF69" stroke-width="2.5" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2041 26.3147C7.18542 25.7499 3.94302 23.2672 2.21059 19.9172C2.88854 16.8177 9.39447 16.1457 12.5705 16.5921C15.7466 17.0385 21.8153 19.4777 21.6126 22.6439C19.0239 25.3867 15.2228 26.8795 11.2041 26.3147Z" stroke="#00BF69" stroke-width="2.5" stroke-linejoin="round"/>
  </svg>
  


  

  `;
  const SvgAcc = () => <SvgXml xml={svgMarkup} width="25px" height="30px" />;  

  return <SvgAcc />;
}