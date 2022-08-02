import Head from "next/head"
import { NextPage } from "next/types"

const Home: NextPage = ( ) => {
	return (
		<div>
			<Head>
				<title>Mažylių namai</title>
				<meta name="description" content="Kūdikių vystymo vietos" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1>
       			   Kur vystyti savo mažylį
				</h1>
				<p>
      			Rask, kur kelionėje po Lietuvą gali rasti vystymo stalą.
				</p>
			</main>
		</div>
	)
}

export default Home
