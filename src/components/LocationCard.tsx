import EventSeatIcon from '@mui/icons-material/EventSeat'
import MicrowaveIcon from '@mui/icons-material/Microwave'
import WcIcon from '@mui/icons-material/Wc'
import {
	Card,
	CardActions,
	CardContent,
	Chip, Grid, Typography
} from '@mui/material'
import Button from '@mui/material/Button'
import type { NextPage } from 'next'

import { MappedLocation } from '../types/Location'

interface ILocationCardProps {
          location: MappedLocation;
        }

const LocationCard: NextPage<ILocationCardProps> = ({ location }) => {
	const {
		name,
		address,
		coordinates,
		amenities
	} = location
	const {
		microwave,
		chair,
		wc
	} = amenities

	return (

		<Grid item key={name}>
			<Card sx={{
				maxWidth: 380,
				minWidth: 380,
				padding: '1rem'
			}}>
				<CardContent>
					<Typography gutterBottom variant="h6" component="h3">
						{name}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{address}
					</Typography>
				</CardContent>
				<CardActions>
					<Button
						color="primary"
						href={`https://www.google.com/maps/?q=${coordinates.coords[0]},${coordinates.coords[1]}`}
						variant="contained"
			 			target="_blank"
					>
					Google Maps
					</Button>
					<Chip
						icon={<MicrowaveIcon fontSize='small'/>}
						label="WC"
						color="success"
						variant="filled"
						sx={{
							padding: '5px',
							margin: '5px',
							display: microwave ? 'inline-flex' : 'none',
						}}
					/>
					<Chip
						icon={<EventSeatIcon fontSize='small'/>}
						label="WC"
						color="success"
						variant="filled"
						sx={{
							padding: '5px',
							margin: '5px',
							display: chair ? 'inline-flex' : 'none',
						}}
					/>
					<Chip
						icon={<WcIcon fontSize='small'/>}
						label="WC"
						color="success"
						variant="filled"
						sx={{
							padding: '5px',
							margin: '5px',
							display: wc ? 'inline-flex' : 'none',
						}}
					/>
					<Button href={`/location/${name}`} >Daugiau</Button>
				</CardActions>
			</Card>
		</Grid>
	)
}

export default LocationCard

