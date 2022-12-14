import { List, Paper } from '@mui/material'
import React, { DragEvent, FC, useMemo } from 'react'
import { EntryCard } from './EntryCard'
import { TypeStatus } from '../../interfaces';
import { useContext } from 'react';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { UIContext } from '../../context/ui';
import styles from './EntryList.module.css'

interface Props {
    status: TypeStatus
}

export const EntryList: FC<Props> = ({status}) => {

    const { entries, updateEntry } = useContext(EntriesContext)
	const { isDragging, setEndDragging } = useContext(UIContext)

    // Usamos useMemo para que no haga el calculo cada que se renderiza el componente
    // Ya que este calculo puede llegar a ser muy pesado y solo necesitamos que lo haga 
    // cuando las entradas cambian, no cada que se renderisza el componente 
    const entriesByStatus = useMemo( () => entries.filter((entry)=> entry.status === status), [entries] )

	const allowDrop = (event: DragEvent<HTMLDivElement>) => {
		event?.preventDefault()
	}

	const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
		const id = event.dataTransfer.getData('text')
		// V116 Con ! le decimos a TS que confie en que esa variable siempre retornará algo
		const entry = entries.find( e => e._id === id )!
		entry.status = status
		updateEntry(entry)
		setEndDragging()
	}

	return (
		// todo: Aquí haremos drop
		<div
			onDrop={ onDropEntry }
			onDragOver={ allowDrop }
			className={isDragging ? styles.dragging : ''}
		>
			<Paper
				sx={{
					height: 'calc(100vh - 250px)',
					overflow: 'scroll',
					backgroundColor: 'transparent',
				}}
			>
				<List sx={{ opacity: isDragging ? .2 : 1, transition: 'all .3s' }}>
                    {
                        entriesByStatus.map((entry)=> (
                            <EntryCard key={entry._id} entry={entry} />
                        ))
                    }
				</List>
			</Paper>
		</div>
	)
}
