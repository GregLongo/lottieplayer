import { React, Component } from "react"
import {css, jsx } from "@emotion/react"
import styled from "@emotion/styled"
import Hamburger from "hamburger-react"

const Menu = styled.div`
	position: fixed;
	transform: ${ props => props.isOpen ? 'translate(-40%) skew(-15deg)' : 'translate(-100%)' };
	transition: transform .3s ease;
	height: 100vh;
	width: 400px;
	padding: 64px;
	background:#ddaf24;
`
const Toggle = styled.div`
	position: fixed;
	right: 64px;
	top: 64px;
	cursor: pointer;
	outline: none;
`
const List = styled.ul`
	list-style: none;
`
const ListItem = styled.li`
	padding-left: 40%;
`
function MenuContainer(props){
		return(
			<Menu isOpen={props.open}>
				<List>
					<ListItem>Link</ListItem>
					<ListItem>Link</ListItem>
					<ListItem>Link</ListItem>
					<ListItem>Link</ListItem>
				</List>
			</Menu>
			)
	}

class MenuSlant extends Component {
	constructor(props, context){
		super(props, context);
		this.state={
			open: false
		}
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	toggleMenu(){
		this.setState({
					open: !this.state.open
				})
		console.log(this.state.open)
	}
	render(){

		return(
			<div>
				<Toggle><Hamburger
				 color="white"
				 size={80}
				 toggled={this.state.open}
				 toggle={this.toggleMenu}/></Toggle>
				<MenuContainer open={this.state.open} />
			</div>


			)
	}
}

export default MenuSlant