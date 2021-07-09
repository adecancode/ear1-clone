import React from "react";
import { SvgXml } from "react-native-svg";
  
export default function Ex(){  
  const svgMarkup = `
  

  

  <svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.97836 24.5123L13.1046 13.2553L13.5222 10.2845L13.1046 13.2553L15.8908 25.7648" stroke="#00BF69" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20.2364 3.65341C22.4936 5.65451 23.5983 8.65339 23.1785 11.6406C22.7586 14.6278 20.8702 17.206 18.1488 18.5074" stroke="#00BF69" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18.4896 7.27353C20.1856 9.5728 19.7312 12.8063 17.4671 14.549" stroke="#00BF69" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.89682 2.05972C6.17541 3.36111 4.28695 5.93934 3.86713 8.92655C3.4473 11.9138 4.55194 14.9126 6.80922 16.9137" stroke="#00BF69" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.57714 6.02097C7.31399 7.76424 6.85967 10.9969 8.55464 13.2965" stroke="#00BF69" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.50992 21.698L15.1942 22.6374" stroke="#00BF69" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  


  

  `;
  const SvgEx = () => <SvgXml xml={svgMarkup} width="26px" height="28px" />;  

  return <SvgEx />;
}