import React, { ChangeEvent, useContext, useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { EntriesContext } from '../../context/entries/EntriesContext'
import { UIContext } from '../../context/ui'

export const NewEntry = () => {
	
	const [inputValue, setInputValue] = useState('')
	const [touched, setTouched] = useState(false)

	const { addNewEntry } = useContext(EntriesContext)
	const { isAddingEntry, setIsAddingEntry } = useContext(UIContext)

	const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event?.target.value)
	}

	const onSave = () => {
		if (inputValue.length === 0) return
		addNewEntry(inputValue)
		setInputValue('')
		setTouched(false)
		setIsAddingEntry(false)
	}

	return (
		<Box
			sx={{
				marginBottom: 2,
				paddingX: 2
			}}
		>
			{isAddingEntry ? (
				<>
					<TextField
						autoFocus
						fullWidth
						helperText={inputValue.length <= 0 && touched && 'Nueva tarea'}
						label='Nueva tarea'
						placeholder='Nueva Tarea'
						error={inputValue.length <= 0 && touched}
						sx={{ marginBottom: 1, marginTop: 1 }}
						value={inputValue}
						onBlur={() => setTouched(true)}
						onChange={onTextFieldChanged}
					/>
					<Box display='flex' justifyContent='space-between'>
						<Button
							variant='text'
							onClick={() => {
								setIsAddingEntry(false)
								setTouched(false)
							}}
						>
							Cancelar
						</Button>
						<Button
							variant='outlined'
							color='secondary'
							endIcon={<SaveIcon />}
							onClick={onSave}
						>
							Guardar
						</Button>
					</Box>
				</>
			) : (
				<Button
					fullWidth
					startIcon={<AddCircleOutlineIcon />}
					variant='outlined'
					onClick={() => setIsAddingEntry(true)}
				>
					Agregar nueva tarea
				</Button>
			)}
		</Box>
	)
}
