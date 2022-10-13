import { FC, useEffect, useReducer } from 'react'
import { Entry } from '../../interfaces'
import { EntriesContext, entriesReducer } from './'
import { v4 as uuidv4 } from 'uuid'
import { entriesApi } from '../../apis'

type Props = {
	children: React.ReactNode
}

// Esto es para los estados no tipa el contexto
export interface EntriesState {
	entries: Entry[]
}

const Entries_INITIAL_STATE: EntriesState = {
	entries: []
}

export const EntriesProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)

	const addNewEntry = (inputValue: string) => {
		const newEntry: Entry = {
			_id: uuidv4(),
			description: inputValue,
			createAt: Date.now(),
			status: 'pending'
		}
		dispatch({ type: '[Entry] - add Entry', payload: newEntry })
	}

	const updateEntry = (entry: Entry) => {
		dispatch({ type: '[Entry] - Update Entry', payload: entry })
	}

	const refeshEntries = async () => {
		const { data } = await entriesApi<Entry[]>('/entries')
		dispatch({ type: '[Entry] - Refresh-Data', payload: data })
	}

	useEffect(() => {
		refeshEntries()
	}, [])

	return (
		<EntriesContext.Provider
			value={{
				...state,

				addNewEntry,
				updateEntry
			}}
		>
			{children}
		</EntriesContext.Provider>
	)
}
