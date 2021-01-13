import React from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import world from "../maps/world.json"

const geoUrl = world

const locations =[
	[-124.082840, 40.866516], //Arcata
	[-74.006, 40.7128], //NYC
	[-73.561668, 45.508888], //Montreal
	[139.691711, 35.689487], //Tokyo
	[-0.127758, 51.507351], //London
	[116.407394, 39.904202], //Beijing
	[-43.172897, -22.906847], //Rio
	[144.946014, -37.815018], //Melbourn
	[3.406448, 6.465422], //Lagos
	[37.618423, 55.751244], //Moscow
]

export default function WorldMap(props){
	return (
		<ComposableMap
			width={1200}
			height={900}
			>
			<Geographies geography={geoUrl}>
			{({ geographies }) =>
				geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
			}
			</Geographies>
		{locations.map(location =>
			<Marker coordinates={location} >
				<circle r={4} fill="#ddaf24" />
			</Marker>
			)}
		</ComposableMap>
	)
}