import {
	ApolloClient, InMemoryCache
} from "@apollo/client"
// https://express-typescript-boilerplate-production.up.railway.app/graphql

const db = process.env.ENV === 'dev' ? 'http://localhost:5050/graphql' : 'https://express-typescript-boilerplate-production.up.railway.app/graphql'
const client = new ApolloClient({
	uri: db,
	cache: new InMemoryCache(),
})

export default client