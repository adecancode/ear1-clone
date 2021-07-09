import React from "react";
import { SvgXml } from "react-native-svg";
  
export default function Mess(){  
  const svgMarkup = `
  

  

  <svg width="28" height="23" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M25.6932 7.33686L24.1623 18.2298C23.9509 19.7338 22.5603 20.7817 21.0563 20.5703L4.71689 18.274C3.21289 18.0626 2.16501 16.672 2.37638 15.168L3.90729 4.27505" stroke="#00BF69" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M25.6932 7.33686C25.9046 5.83286 24.8567 4.44227 23.3527 4.2309L7.01328 1.93454C5.50927 1.72317 4.11869 2.77105 3.90731 4.27506L12.5179 11.5076C13.3234 12.1837 14.4439 12.3411 15.4045 11.9133L25.6932 7.33686Z" stroke="#00BF69" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  


  

  `;
  const SvgMess = () => <SvgXml xml={svgMarkup} width="28px" height="23px" />;  

  return <SvgMess />;
}