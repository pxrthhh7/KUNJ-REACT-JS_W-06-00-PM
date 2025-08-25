import React, { createContext } from 'react'

export const AppContext = createContext();

export const AppProvider = ({children}) => {

    const name = "Parth"

    return(
        <AppContext.Provider value={name}>
            {children}
        </AppContext.Provider>
    )
}