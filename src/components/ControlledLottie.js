import React, { Component } from "react"
import Lottie from "react-lottie"
import animationData from '../lotties/graphanim.json'


 class ControlledLottie extends Component{

	constructor(props){
		super(props);
		this.state = {
			isStopped: this.props.stopped,
			isPaused: false
		}
	}
	render(){

		const buttonStyle = {
			display: 'block',
			margin: '10px auto'
		};


		const defaultOptions = {
			loop: true,
			autoplay: true,
			animationData: animationData,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid slice'
			}
		};

		return(
			<div>
				<Lottie options = { defaultOptions } 
						height = { 400 }
						width = { 400 }
						isStopped = {this.state.isStopped}
						isPaused = {this.state.isPaused}
	
				/>

{/*
			<button style={buttonStyle} onClick={()=> this.setState({isStopped:true})}>Stop</button> 
			<button style={buttonStyle} onClick={()=> this.setState({isStopped:false})}>Play</button> 	
			<button style={buttonStyle} onClick={()=> this.setState({isPaused: !this.state.isPaused})}>Pause</button> 
*/}
			</div>


		)

	}//render
}

export default ControlledLottie
