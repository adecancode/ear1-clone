import React from "react";
import { SvgXml } from "react-native-svg";
  
export default function InAcc(){  
  const svgMarkup = `
  

  
<
<svg width="23" height="27" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.5">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.7964 2C14.5018 2 16.7055 4.20364 16.7055 6.90909C16.7055 9.61455 14.5018 11.8182 11.7964 11.8182C9.0909 11.8182 6.88727 9.61455 6.88727 6.90909C6.88727 4.20364 9.0909 2 11.7964 2Z" stroke="white" stroke-width="2.5" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.7964 25.4545C7.73818 25.4545 4.18182 23.4473 2 20.3709C2.24 17.2073 8.58909 15.6364 11.7964 15.6364C15.0036 15.6364 21.3527 17.2073 21.5927 20.3709C19.4109 23.4473 15.8545 25.4545 11.7964 25.4545Z" stroke="white" stroke-width="2.5" stroke-linejoin="round"/>
</g>
</svg>


  

  `;
  const SvgAcc = () => <SvgXml xml={svgMarkup} width="23px" height="27px" />;  

  return <SvgAcc />;
}