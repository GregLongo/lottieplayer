import React, { Component } from "react"
import Lottie from "react-lottie"
import { gsap } from "gsap" 
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


 class TriggeredLottie extends Component{

	constructor(props){
		super(props);
		this.state = {
			isStopped: true ,
			isPaused: false
		}
		this.ref = React.createRef();
	}

  	triggerAnim = () => {
    this.setState({isStopped:false})
  }
  
	stopAnim = () => {
    this.setState({isStopped:true})
  }

  componentDidMount(){

		ScrollTrigger.create({
			trigger: this.ref.current,
			start: 'top center',
			onEnter: this.triggerAnim,
			onLeaveBack: this.stopAnim
		})

  }
	render(){

		const defaultOptions = {
			autoplay: false,
			loop: false,
			animationData: this.props.animation,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid slice'
			}
			
		};

		return(
			<div ref={this.ref}>
				<Lottie options = { defaultOptions } 
						height = { this.props.height }
						width = { this.props.width }
						isStopped = {this.state.isStopped}
						isPaused = {this.state.isPaused}				  
				/>
			</div>

		)

	}//render
}

export default TriggeredLottie
