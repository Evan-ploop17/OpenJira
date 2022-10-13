import { createContext } from 'react'

interface ContextProps {
    isAddingEntry: boolean
    isDragging: boolean
    sideMenuOpen: boolean
    closeSideMenu: () => void
    openSideMenu: () => void
    setEndDragging: () => void
    setIsAddingEntry: (isAdding: boolean) => void
    setStartDragging: () => void
}

export const UIContext = createContext({} as ContextProps)