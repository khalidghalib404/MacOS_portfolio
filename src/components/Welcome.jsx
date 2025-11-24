// import React, {useRef} from 'react';
// import gsap from "gsap";
// import {useGSAP} from "@gsap/react";
//
// const FONT_WEIGHT = {
//     subtitle: {min:100,max:400,default :100 },
//     title: {min:400,max:900,default :400 },
// }
//
// const renderText = (text, className, baseWeight = 400 ) =>{
//     return [...text].map((char,i) => (
//         <span key={i} className={className} style={{fontVariantSettings:`'wght' ${baseWeight}`}}>
//             {char == "" ? "\u00A0":  char}
//         </span>
//     ))
// }
//
//
// const setupTextHover = (container,type) =>{
//     if(!container)return;
//     const letters = container.querySelectorAll("span");
//     const { min, max ,default:base } = FONT_WEIGHT[type];
//
//
//     const animateLetters  = (letter,weight,duration = 0.25)=>{
//         return gsap.to(letter,{duration, ease:'power2.out',fontVariantSettings:`'wght' ${weight}`});
//     }
//
//
//     const handleMouseMove = e => {
//         const {left} = container.getBoundingClientRect();
//         const mouseX = e.clientX - left;
//
//         letters.forEach((letter) => {
//              const {left:l, width:w } = letter.getBoundingClientRect();
//             const distance = Math.abs(mouseX - (l + w / 2));
//              const intensity = Math.exp(-(distance **2) / 2000);
//              animateLetters(letter,min +(max - min)* intensity);
//         })
//     }
//     container.addEventListener("mousemove", handleMouseMove);
// }
//
//
// const Welcome = () => {
//     const titleRef = useRef(null);
//     const subtitleRef = useRef(null);
//
//     useGSAP(() =>{
//     setupTextHover(titleRef.current,'title');
//     setupTextHover(subtitleRef.current, 'subtitle');
//     },[])
//     return <section id="welcome">
//         <p ref={subtitleRef}>
//             {renderText( "Hey I'am Khalid Ghalib Welcome To My" , "text-3xl font-georama",100 )} </p>
//         <h1 ref={titleRef} className="mt-7"> {renderText ("Portfolio","text-9xl italic font-georama" )} </h1>
//
//         <div className="small-screen">
//             <p>this portfolio is design for tablets and laptops only</p>
//
//         </div>
//     </section>
// };
//
// export default Welcome;






import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const renderText = (text, className) => {
    return [...text].map((char, i) => (
        <span key={i} className={className}>
      {char === " " ? "\u00A0" : char}
    </span>
    ));
};

const setupTextHover = (container) => {
    if (!container) return;

    const letters = container.querySelectorAll("span");

    const onMove = (e) => {
        const rect = container.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;

        letters.forEach((letter) => {
            const { left, width } = letter.getBoundingClientRect();
            const center = left - rect.left + width / 2;
            const dist = Math.abs(mouseX - center);

            const intensity = Math.exp(-(dist ** 2) / 800);

            gsap.to(letter, {
                scale: 1 + intensity * 0.4,
                opacity: 0.6 + intensity * 0.4,
                y: -intensity * 10,
                duration: 0.2,
                ease: "power2.out",
            });
        });
    };

    const onLeave = () => {
        gsap.to(letters, {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    container.addEventListener("mousemove", onMove);
    container.addEventListener("mouseleave", onLeave);
};

const Welcome = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useGSAP(() => {
        setupTextHover(titleRef.current);
        setupTextHover(subtitleRef.current);
    }, []);

    return (
        <section id="welcome">
            <p ref={subtitleRef} className="text-3xl font-georama">
                {renderText("Hey I'm Khalid Ghalib Welcome To My", "inline-block")}
            </p>

            <h1 ref={titleRef} className="mt-7 text-9xl italic font-georama">
                {renderText("Portfolio", "inline-block")}
            </h1>
        </section>
    );
};

export default Welcome;