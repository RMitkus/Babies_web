import { gql } from "@apollo/client"

import client from '../../../apollo-client'
import { Location } from "../../types/Location"

async function getLocations(): Promise<Location[]>{
	const { data } = await client.query({
		query: gql`
            query {
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
        `
	})

	return data.locations
}

const a = await getLocations()

console.log(a)