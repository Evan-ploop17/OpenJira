import { FC, useReducer } from 'react'
import { UIContext } from './UIContext'
import { UIReducer } from './uiReducer'

type Props = {
	children: React.ReactNode
}

export interface UIState {
	sideMenuOpen: boolean
	isAddingEntry: boolean
	isDragging: boolean
}

const UI_INITIAL_STATE: UIState = {
	sideMenuOpen: false,
	isAddingEntry: false,
	isDragging: false,
}

export const UIProvider = ({ children }: Props) => {

	const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE)

    const openSideMenu = () => dispatch({type: 'UI - Open Sidebar'})
    const closeSideMenu = () => dispatch({type: 'UI - Close Sidebar'})

	const setIsAddingEntry = (isAdding: boolean) => {
		dispatch({type: 'UI - Adding new Entry', payload: isAdding})
	}

	const setStartDragging = () => dispatch({type: 'UI - Start Dragging'})
	const setEndDragging = () => dispatch({type: 'UI - End Dragging'})

	return (
		<UIContext.Provider
			value={{
				...state,

                // Esto se debe definir en la interfaz de UIContext
				setEndDragging,
				setIsAddingEntry,
				setStartDragging,
                closeSideMenu,
                openSideMenu,
			}}
		>
			{children}
		</UIContext.Provider>
	)
}
