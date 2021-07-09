import React from "react";
import { SvgXml } from "react-native-svg";
  
export default function Search(){  
  const svgMarkup = `
  
<svg width="62" height="50" viewBox="0 0 62 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.05" d="M0 25C0 11.1929 11.1929 0 25 0H62V50H25C11.1929 50 0 38.8071 0 25V25Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M35.0706 27.4898L37.6718 30.091C38.1091 30.5283 38.1091 31.2373 37.6718 31.6746C37.2314 32.1043 36.5286 32.1043 36.0882 31.6746L33.487 29.074C31.0312 30.7158 27.7305 30.227 25.856 27.9439C23.9815 25.6608 24.1446 22.3281 26.233 20.2389C28.3215 18.1498 31.6541 17.9855 33.9378 19.8592C36.2216 21.7329 36.7116 25.0334 35.0706 27.4898ZM34.36 24.3028C34.36 22.0605 32.5423 20.2428 30.3 20.2428C28.0587 20.2453 26.2425 22.0616 26.24 24.3028C26.24 26.5451 28.0577 28.3628 30.3 28.3628C32.5423 28.3628 34.36 26.5451 34.36 24.3028Z" fill="white"/>
</svg>

  `;
  const SvgSearch = () => <SvgXml xml={svgMarkup} width="62px" height="50px" style={{ marginRight: -20 }} />;  

  return <SvgSearch />;
}