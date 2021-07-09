import React from "react";
import { SvgXml } from "react-native-svg";
  
export default function InMess(){  
  const svgMarkup = `
  

  <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g opacity="0.5">
  <path d="M24 4.75V15.75C24 17.2688 22.7688 18.5 21.25 18.5H4.75C3.23122 18.5 2 17.2688 2 15.75V4.75" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M24 4.75C24 3.23122 22.7688 2 21.25 2H4.75C3.23122 2 2 3.23122 2 4.75L11.5333 10.7138C12.4251 11.2712 13.5566 11.2712 14.4483 10.7138L24 4.75Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  </svg>
  

  `;
  const SvgMess = () => <SvgXml xml={svgMarkup} width="26px" height="20px" />;  

  return <SvgMess />;
}