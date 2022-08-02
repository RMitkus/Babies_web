/* eslint-disable no-unused-vars */
import { gql } from "@apollo/client"
import { Grid } from "@mui/material"
import type { NextPage } from 'next'
import Head from 'next/head'

import client from '../../../apollo-client'
import LocationCard from "../../components/LocationCard"
import styles from '../../styles/Location.module.css'
import {
	Location, MappedLocation
} from '../../types/Location'

export async function getStaticProps(): Promise<{props: {mappedLocations: Location[]}}> {
	const { data } = await client.query({
		query: gql`
			query Locations {
				locations {
				name
				address
				coordinates
				amenities {
					microwave
					chair
					wc
				}
				}
			}
		`,
	})

	const { locations } = data
	const mappedLocations = locations.map((location: Location) => {
		const {
			amenities,
			name,
			address,
			coordinates
		} = location
		const {
			microwave,
			chair,
			wc
		} = amenities

		const coords = coordinates.split(',')

		return {
			name,
			address,
			coordinates: {
				coords
			},
			amenities: {
				microwave,
			  chair,
			  wc,
			}
		}
	})

	return {
		props: {
			mappedLocations
		},
	}
}

interface ILocationProps {
	mappedLocations: MappedLocation[]
}

const Location: NextPage<ILocationProps> = ({ mappedLocations }) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Mažylių namai</title>
				<meta name="description" content="Kūdikių vystymo vietos" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
       			   Kur vystyti savo mažylį
				</h1>
				<p className={styles.description}>
      			Rask, kur kelionėje po Lietuvą gali rasti vystymo stalą.
				</p>

				<Grid
					container
					spacing={3}
					sx={{
						marginTop: '1rem',
						marginBottom: '1rem',
						justifyContent: 'space-around'
					}}
				>
					{mappedLocations.map(
						(location: MappedLocation) =>
							<LocationCard
								key={location.name}
								location={location}
							/>
					 )}
				</Grid>
			</main>
		</div>
	)
}

export default Location
