import {
	CacheProvider, EmotionCache
} from '@emotion/react'
import {
	ThemeProvider, CssBaseline, createTheme
} from '@mui/material'
import Container from '@mui/material/Container'
import type { AppProps } from 'next/app'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

// import darkThemeOptions from '../styles/theme/darkThemeOptions'
import NavBar from '../components/NavBar'
import lightThemeOptions from '../styles/theme/lightThemeOptions'
import createEmotionCache from '../utility/createEmotionCache'
import '../styles/globals.css'

const clientSideEmotionCache = createEmotionCache()

const lightTheme = createTheme(lightThemeOptions)
// const darkTheme = createTheme(darkThemeOptions)

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
  }
function MyApp({
	Component,
	emotionCache = clientSideEmotionCache,
	pageProps: { ...pageProps }
}: MyAppProps) {
	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={lightTheme}>
				<CssBaseline />
				<NavBar />
				<Container maxWidth="xl">
					<Component {...pageProps} />
				</Container>
			</ThemeProvider>
		</CacheProvider>
	)
}

export default MyApp

