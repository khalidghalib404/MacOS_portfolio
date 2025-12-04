import { useLayoutEffect, useRef, useEffect } from 'react';
import useWindowStore from "#store/window.js";
import { useGSAP } from '@gsap/react';
import gsap  from 'gsap';
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable, useGSAP);

const WindowWrapper = (Component,windowKey) =>{
    const Wrapped = (props) => {
        const  {focusWindow, windows} = useWindowStore();
        const {isOpen, zIndex} = windows[windowKey];
        const ref = useRef(null);
      
      useGSAP(() => { 
        const el = ref.current;
        if (!el || !isOpen)return;
        el.style.display = "block"
        gsap.fromTo(el,{scale: 0.8, opacity: 0, y:40},{scale: 1,opacity: 1, y: 0, duration:0.4 , ease: "power3.out"})
      },[isOpen])

      useEffect(() => {
        const el = ref.current;
        if (!el || !isOpen) return;

        // Set initial position
        gsap.set(el, { x: 50, y: 50 });

        // Find the window header to use as drag handle
        const header = el.querySelector('#window-header');
        const dragHandle = header || el;

        const [instance] = Draggable.create(el, {
          type: 'x,y',
          trigger: dragHandle,
          onPress: () => focusWindow(windowKey),
          bounds: 'body',
          cursor: 'move',
          inertia: true
            
        });

        return () => {
          if (instance) instance.kill();
        };
      }, [isOpen, focusWindow, windowKey]);


      useLayoutEffect(() =>{
       const el = ref.current;
       if(!el) return;
       el.style.display = isOpen ? "block" : "none"
      },[isOpen])
      
      
        if (!isOpen) return null;
        return <section id={windowKey} ref={ref}  style={{zIndex, position: 'absolute', backgroundColor: 'white', border: '1px solid #ccc'}} className="absolute" data-x="50" data-y="50">
           <Component {...props}/>
            </section>
    }


        Wrapped.displayName =   `WindowWrapper (${Component.displayName || Component.name || "Component"})`;
        return Wrapped;
}


export default WindowWrapper