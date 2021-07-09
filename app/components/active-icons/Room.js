import React from "react";
import { SvgXml } from "react-native-svg";
  
export default function Room(){  
  const svgMarkup = `
  

  

  <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.73796 18.8978L4.99525 18.7934C3.35452 18.5628 2.21138 17.0458 2.44197 15.4051L2.85949 12.4343C3.09008 10.7936 4.60708 9.65043 6.24781 9.88102L6.99051 9.9854C7.4007 10.043 7.68648 10.4223 7.62883 10.8325L6.58504 18.2595C6.52739 18.6697 6.14814 18.9555 5.73796 18.8978Z" stroke="#00BF69" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.3347 21.0898L20.592 20.9854C20.1818 20.9278 19.896 20.5485 19.9537 20.1383L20.9974 12.7113C21.0551 12.3011 21.4343 12.0154 21.8445 12.073L22.5872 12.1774C24.228 12.408 25.3711 13.925 25.1405 15.5657L24.723 18.5365C24.4924 20.1772 22.9754 21.3204 21.3347 21.0898Z" stroke="#00BF69" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.24781 9.88102C6.88193 5.36901 11.0537 2.22536 15.5657 2.85948V2.85948C17.7324 3.164 19.6895 4.31678 21.0063 6.06422C22.3231 7.81166 22.8917 10.0106 22.5872 12.1774" stroke="#00BF69" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.6139 24.0726L17.842 24.3858C19.4827 24.6164 20.9997 23.4732 21.2303 21.8325V21.8325L21.3347 21.0898" stroke="#00BF69" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9197 25.3493L12.4343 25.1405C11.6139 25.0252 11.0424 24.2667 11.1577 23.4464V23.4464C11.273 22.626 12.0315 22.0544 12.8518 22.1697L14.3372 22.3785C15.1576 22.4938 15.7292 23.2523 15.6139 24.0726V24.0726C15.4986 24.893 14.7401 25.4646 13.9197 25.3493Z" stroke="#00BF69" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  

  

  `;
  const SvgRoom = () => <SvgXml xml={svgMarkup} width="27px" height="27px" />;  

  return <SvgRoom />;
}