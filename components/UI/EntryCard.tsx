import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	Typography
} from '@mui/material'
import React, { DragEvent, FC, useContext } from 'react'
import { UIContext } from '../../context/ui'
import { Entry } from '../../interfaces'

interface Porps {
    entry: Entry
}

export const EntryCard: FC<Porps> = ({entry}) => {

	const { setStartDragging, setEndDragging } = useContext(UIContext)
	
	const onDragStart = (event: DragEvent<HTMLDivElement>) => {
		event.dataTransfer.setData('text', entry._id)
		setStartDragging()
	}

	const onDragEnd = () => {
		setEndDragging()
	}

	return (
		<Card
			sx={{ margin: '8px 4px' }}
			draggable
			onDragStart={ onDragStart }
			onDragEnd={ onDragEnd }
		>
			<CardActionArea>
				<CardContent>
					<Typography sx={{ whiteSpace: 'pre-line' }}>
						{entry.description}
					</Typography>
				</CardContent>

				<CardActions
					sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}
				>
					<Typography variant='body2'>Hace 30 minutos</Typography>
				</CardActions>
			</CardActionArea>
		</Card>
	)
}
