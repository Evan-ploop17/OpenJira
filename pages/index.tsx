import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import type { NextPage } from 'next'
import { Layout } from '../components/layout'
import { EntryList } from '../components/UI'
import { NewEntry } from '../components/UI/NewEntry'

const Home: NextPage = () => {
	return (
		<Layout title='Home - OpenJira'>
			<Grid container spacing={2}>
				<Grid item xs={12} md={4}>
					<Card sx={{ height: 'calc(100vh - 110px)' }}>
						<CardHeader title='Pendientes' />
						<NewEntry/>
						<EntryList status='pending' />
					</Card>
				</Grid>
				<Grid item xs={12} md={4}>
					<Card sx={{ height: 'calc(100vh - 110px)' }}>
						<CardHeader title='En progreso' />
						<EntryList status='in-progress' />
					</Card>
				</Grid>
				<Grid item xs={12} md={4}>
					<Card sx={{ height: 'calc(100vh - 110px)' }}>
						<CardHeader title='Completadas' />
						<EntryList status='finished' />
					</Card>
				</Grid>
			</Grid>
		</Layout>
	)
}

export default Home
