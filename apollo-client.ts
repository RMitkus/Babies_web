import {
	ApolloClient, InMemoryCache
} from "@apollo/client"
// https://express-typescript-boilerplate-production.up.railway.app/graphql
const client = new ApolloClient({
	uri: "http://localhost:5050/graphql",
	cache: new InMemoryCache(),
})

export default client