import React from "react";
import { SvgXml } from "react-native-svg";
  
export default function InRoom(){  
  const svgMarkup = `
  

  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g opacity="0.5">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 19H4.75C3.09315 19 1.75 17.6569 1.75 16V13C1.75 11.3431 3.09315 10 4.75 10H5.5C5.91421 10 6.25 10.3358 6.25 10.75V18.25C6.25 18.6642 5.91421 19 5.5 19Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.25 19H20.5C20.0858 19 19.75 18.6642 19.75 18.25V10.75C19.75 10.3358 20.0858 10 20.5 10H21.25C22.9069 10 24.25 11.3431 24.25 13V16C24.25 17.6569 22.9069 19 21.25 19Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.75 10C4.75 5.44365 8.44365 1.75 13 1.75V1.75C15.188 1.75 17.2865 2.61919 18.8336 4.16637C20.3808 5.71354 21.25 7.81196 21.25 10" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16 22.75H18.25C19.9069 22.75 21.25 21.4069 21.25 19.75V19.75V19" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 24.25H13C12.1716 24.25 11.5 23.5784 11.5 22.75C11.5 21.9216 12.1716 21.25 13 21.25H14.5C15.3284 21.25 16 21.9216 16 22.75C16 23.5784 15.3284 24.25 14.5 24.25Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  </svg>
  

  `;
  const SvgRoom = () => <SvgXml xml={svgMarkup} width="26px" height="26px" />;  

  return <SvgRoom />;
}