import React, { Component } from "react"
import Lottie from "react-lottie"
import animationData from '../lotties/graph_icfj.json'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


class LottieScrubber extends Lottie{
	componentDidUpdate(props){
		const frame = (this.anim.getDuration(true) * this.props.percentage )
		this.anim.goToAndStop(frame,true)
	}
	
}

class ScrubbedLottie extends Component{
	constructor(props){
		super(props);
		this.ref = React.createRef();
		this.state = {
			percent: 1
		}
	}

handleUpdate = (e) =>{

	this.setState({

		percent: e
	});
}
	componentDidMount(){
		gsap.to(this.ref.current,{
			scrollTrigger:{
				trigger: this.ref.current,
				start: 'top bottom',
				end: 'bottom top',
				scrub: true,
				onUpdate: ({progress}) => this.handleUpdate(progress)
			},

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

		}
		return(
			<div ref={this.ref}>
			<LottieScrubber  options = { defaultOptions } 
			height = { this.props.height }
			width = { this.props.height }	
			percentage = {this.state.percent}
			/>
			</div>
			)
	}//render
}

export default ScrubbedLottie