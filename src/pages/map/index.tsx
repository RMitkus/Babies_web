import {
	GoogleMap, useJsApiLoader
} from '@react-google-maps/api'
import { NextPage } from "next"
import Head from "next/head"
import {
	useState, useCallback
} from 'react'

const containerStyle = {
	width: '1000px',
	height: '1000px'
}

const center = {
	lat: -3.745,
	lng: -38.523
}

const Map: NextPage = () => {
	const [map, setMap] = useState(null)

	const onLoad = useCallback(function callback(map) {
		const bounds = new window.google.maps.LatLngBounds(center)

		map.fitBounds(bounds)
		setMap(map)
	}, [])

	const onUnmount = useCallback(function callback(map) {
		setMap(null)
	}, [])

	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: "AIzaSyAC95Bgdrtram9uZtnj8rKpxINt5c4egUI"
	})

	return (
		<>
			<Head>
				<title>Mažylių namai || Žemėlapis</title>
				<meta name="description" content="Vietų žemėlapi" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<div>
            Maps

				{isLoaded ? (
					<GoogleMap
						mapContainerStyle={containerStyle}
						center={center}
						zoom={10}
						onLoad={onLoad}
						onUnmount={onUnmount}
					>
						{ /* Child components, such as markers, info windows, etc. */ }
						<></>
					</GoogleMap>
				) : <></>}
			</div>
		</>
	)
}

export default Map