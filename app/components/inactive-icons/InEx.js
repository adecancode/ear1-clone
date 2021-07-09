import React from "react";
import { SvgXml } from "react-native-svg";
  
export default function InEx(){  
  const svgMarkup = `
  

  <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g opacity="0.5">
  <path d="M6.5 24.248L11 12.248V9.24802V12.248L15.5 24.248" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16.726 1.74701C19.2398 3.41448 20.7511 6.23044 20.7511 9.24701C20.7511 12.2636 19.2398 15.0795 16.726 16.747" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.5 5.57501C17.4996 7.61586 17.4996 10.8812 15.5 12.922" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.275 1.74701C2.7612 3.41448 1.24994 6.23044 1.24994 9.24701C1.24994 12.2636 2.7612 15.0795 5.275 16.747" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.49999 5.57501C4.50149 7.61629 4.50149 10.8807 6.49999 12.922" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.625 21.248H14.375" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  </svg>
  

  `;
  const SvgEx = () => <SvgXml xml={svgMarkup} width="22px" height="26px" />;  

  return <SvgEx />;
}