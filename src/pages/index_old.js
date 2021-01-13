/** @jsx jsx */

import {css , jsx} from "@emotion/react"
import styled from "@emotion/styled"
import TriggeredLottie from "../components/TriggeredLottie.js"
import TriggeredTextBlock from "../components/TriggeredTextBlock.js"


const desktop = `@media(min-width : 1200px)`;


const Container  = styled.div`
	display: grid;
	justify-content: start;
	grid-template-columns: repeat(1, 1fr);
	align-items: center;
	background: mediumslateblue;
	padding: 0 10rem 0 10rem;
	height: 50em;
	${desktop}{
		grid-template-columns: repeat(2, 2fr);
	}
`

const TextBlock = styled(TriggeredTextBlock)`
`


export default function Home() {


	return (
		<div>
			<div
				css={css`
					height: 50em;
					background: deeppink;
					color: white;
					display: flex;
					align-items: center;
					justify-content: center;
					`} ><h1> Scroll Down</h1></div>
			<Container>
				<TriggeredLottie />
				<TextBlock /> 
			</Container>
			<div
				css={css`
					height: 50em;
					background: #8fffbc;
					`} />
		</div>	
	)
}
