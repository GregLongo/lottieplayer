import React, { Component } from "react"
import Lottie from "react-lottie"
import animationData from '../lotties/graphanim.json'
import { gsap } from "gsap" 
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


 class ScrubbedLottie extends Component{

	constructor(props){
		super(props);
		this.state = {
			isStopped: true ,
			isPaused: false
		}
		this.ref = React.createRef();
		// this.triggerAnim = this.triggerAnim.bind(this);
	}

  	triggerAnim = () => {
    this.setState({isStopped:false})
    console.log(this.state.isStopped);
  }
  
	stopAnim = () => {
    this.setState({isStopped:true})
    console.log(this.state.isStopped);
  }

  componentDidMount(){
		// 	gsap.from(this.ref.current,{
		// 			opacity: 0,
		// 			duration: 1.5,
		// 			scrollTrigger:{
		// 				trigger:this.ref.current,
		// 				start: "top center",
		// 				toggleActions:"play complete reverse reverse"
		// 				}
		// 			}
		// 		)

		 let timeObj = {currentFrame: 0}
 	let endString = "+=1000";
	 ScrollTrigger.create({
	   trigger: this.ref.current,
	     scrub: true,
	     start: "top top",
	     end: endString, 
	     onUpdate: () => {
	         self.goToAndStop(timeObj.currentFrame, true)
	       },
 		});





  }
	render(){




		const defaultOptions = {
			autoplay: false,
			loop: false,
			animationData: animationData,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid slice'
			}
			
		};


		return(
			<div ref={this.ref}>
				<Lottie options = { defaultOptions } 
						height = { 400 }
						width = { 400 }
						isStopped = {this.state.isStopped}
						isPaused = {this.state.isPaused}
						// eventListeners={[{eventName: 'complete', callback: this.stopAnim}]}

					  
				/>
			</div>

		)

	}//render
}

export default ScrubbedLottie
