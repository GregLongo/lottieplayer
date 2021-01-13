import React, {  useRef, useEffect } from "react"
import { gsap } from "gsap" 
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function TriggeredTextBlock(props){
		
		const ref = useRef(null);
		useEffect(()=>{
			gsap.from(ref.current,{
					opacity: 0,
					duration: 1.5,
					scrollTrigger:{
						trigger:ref.current,
						start: "top center",
						toggleActions:"play complete reverse reverse"
						}
					}
				)
		})
		return(
			<div ref={ref} >
				{props.children}
			</div>
		)
}

