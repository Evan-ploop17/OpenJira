import { Sick, Title } from '@mui/icons-material'
import { Box } from '@mui/material'
import Head from 'next/head'
import { FC } from 'react'
import { Navbar, Sidebar } from '../UI'

interface Porps {
	title?: string
	children: React.ReactNode
}

export const Layout: FC<Porps> = ({ title = 'OpenJira', children }) => {
	return (
		<Box sx={{ flexFlow: 1 }}>
			<Head>
				<Title>{title}</Title>
			</Head>

			<Navbar />
			<Sidebar />

			<Box sx={{ padding: '10px 20px' }}>{children}</Box>
		</Box>
	)
}
