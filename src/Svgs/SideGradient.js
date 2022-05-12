import React from 'react';

function SideGradient(props) {
    return (
        <svg className="w-full h-screen" viewBox="0 0 1440 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.5" filter="url(#filter0_f_0_1)">
<circle cx="1581" cy="893" r="644" fill="#3246F5"/>
</g>
<g opacity="0.4" filter="url(#filter1_f_0_1)">
<circle cx="-177" cy="-132" r="644" fill="#F532A7"/>
</g>
<defs>
<filter id="filter0_f_0_1" x="537" y="-151" width="2088" height="2088" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_0_1"/>
</filter>
<filter id="filter1_f_0_1" x="-1221" y="-1176" width="2088" height="2088" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_0_1"/>
</filter>
</defs>
</svg>

    );
}

export default SideGradient;