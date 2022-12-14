import AdbIcon from '@mui/icons-material/Adb'
import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import * as React from 'react'

type Page = {
    name: string;
    href: string;
}

const pages: Page[] = [
	{
		name: 'Vystymo vietos',
		href: '/location'
	},
	{
		name: 'Žemėlapis',
		href: '/map'
	}
]

const NavBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<AdbIcon sx={{
						display: {
							xs: 'none',
							md: 'flex'
						},
						mr: 1
					}} />
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: {
								xs: 'none',
								md: 'flex'
							},
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
                          LOGO
					</Typography>

					<Box sx={{
						flexGrow: 1,
						display: {
							xs: 'flex',
							md: 'none'
						}
					}}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: {
									xs: 'block',
									md: 'none'
								},
							}}
						>
							{pages.map((page) => (
								<MenuItem key={page.name} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">
										<Link href={`${page.href}`}>
											{page.name}
										</Link>
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>

					<Box sx={{
						flexGrow: 1,
						display: {
							xs: 'none',
							md: 'flex'
						}
					}}>
						{pages.map((page) => (
							<Button
								key={page.name}
								onClick={handleCloseNavMenu}
								sx={{
									my: 2,
									color: 'white',
									display: 'block'
								}}
							>
								<Link href={`${page.href}`}>
									{page.name}
								</Link>
							</Button>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}

export default NavBar
