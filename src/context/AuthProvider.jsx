import React, { useEffect } from 'react'
import { getLocalStorage } from '../utils/localStorage'

export const  AuthContext=  createContext()

const AuthProvider =({children}) => {

   

    return (
        <div>
            <AuthContext.Provider value={userData}>
                {children}
            </AuthContext.Provider>

        </div>
    )
}
export  default AuthProvider