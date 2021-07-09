import React from "react";
import { SvgXml } from "react-native-svg";
  
export default function InNot(){  
  const svgMarkup = `
  

  
<svg width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.5">
<path d="M9.77777 25.1667C10.0676 26.1541 10.9736 26.8324 12.0028 26.8324C13.0319 26.8324 13.9379 26.1541 14.2278 25.1667" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 4.33334V1.83334" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.33334C16.6024 4.33334 20.3333 8.0643 20.3333 12.6667C20.3333 20.4956 22 21.8333 22 21.8333H2C2 21.8333 3.66667 19.7045 3.66667 12.6667C3.66667 8.0643 7.39763 4.33334 12 4.33334Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>

  

  `;
  const SvgNot = () => <SvgXml xml={svgMarkup} width="24px" height="29px" />;  

  return <SvgNot />;
}