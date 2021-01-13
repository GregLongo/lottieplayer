/** @jsx jsx */

import {css , jsx} from "@emotion/react"
import styled from "@emotion/styled"
import ScrubbedLottie from "../components/ScrubbedLottie.js"
import TriggeredLottie from "../components/TriggeredLottie.js"
import TriggeredTextBlock from "../components/TriggeredTextBlock.js"
import WorldMap from "../components/WorldMap.js"
import MenuSlant from "../components/MenuSlant.js"
import animationData1 from '../lotties/graph_icfj.json'



const desktop = `@media(min-width : 1200px)`;

const bg = "url(https://www.icfj.org/sites/default/files/styles/scale_485px_height/public/2018-04/IMG_0010%20%282%29%20copy.JPG?itok=HF-1lobL)"


const Container  = styled.div`
	display: grid;
	top: 0;
	justify-content: start;
	grid-template-columns: repeat(1, 1fr);
	align-items: center;
	background: #3c3c3c;
	padding: 0 10rem 0 10rem;
	height: 50em;
	${desktop}{
		grid-template-columns: repeat(2, 2fr);
	}
`


export default function Home() {


	return (
		<div>
			
			<MenuSlant />
			<div
				css={css`
					height: 50em;
					background-image: ${bg};
					background-size: cover;
					background-color: darkgrey;
					background-blend-mode: multiply;
					color: white;
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;
					`} ><h1> ICFJ Demo</h1>
					<h2> Scroll Down</h2>
			</div>
			<Container>
				<TriggeredLottie
					width={400}
					height={400}
					animation={animationData1}
				 />
				<TriggeredTextBlock>
					<h1>This is Title </h1>
					<p>	While publications reporting the news to the general public in a standardized fashion only beganto appear in the 17th century and later, governments as early as Han dynasty China made use of regularly published news bulletins. These bulletins, however, were intended only for government officials, and thus were not journalistic news publications in the modern sense of the term.
					</p> 
				</TriggeredTextBlock>
			</Container>
			<div
				css={css`
					background: #757575;
					`} >
					<WorldMap />
			</div>
			<Container>
				<TriggeredTextBlock>
					<h1>This is Title </h1>
					<p>	While publications reporting the news to the general public in a standardized fashion only beganto appear in the 17th century and later, governments as early as Han dynasty China made use of regularly published news bulletins. These bulletins, however, were intended only for government officials, and thus were not journalistic news publications in the modern sense of the term.
					</p> 
				</TriggeredTextBlock>
				<ScrubbedLottie
					width={400}
					height={400}
					animation={animationData1}
				 />
			</Container>
			<div
				css={css`
					height: 50em;
					background: #757575;
					`} />

		</div>	
	)
}
