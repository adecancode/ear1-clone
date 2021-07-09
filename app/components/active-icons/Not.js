import React from "react";
import { SvgXml } from "react-native-svg";
  
export default function Not(){  
  const svgMarkup = `
  

  

  <svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.24524 24.7487C9.39486 25.7669 10.1977 26.5647 11.2168 26.7079C12.2359 26.8511 13.2275 26.3055 13.6519 25.368" stroke="#00BF69" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14.3453 4.42741L14.6932 1.95174" stroke="#00BF69" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3453 4.42741C18.9029 5.06793 22.0783 9.28183 21.4378 13.8394C20.3482 21.5921 21.8125 23.1488 21.8125 23.1488L2.0071 20.3654C2.0071 20.3654 3.95383 18.4892 4.9333 11.5199C5.57382 6.96228 9.78772 3.78688 14.3453 4.42741Z" stroke="#00BF69" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  


  

  `;
  const SvgNot = () => <SvgXml xml={svgMarkup} width="26px" height="29px" />;  

  return <SvgNot />;
}