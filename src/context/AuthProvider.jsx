import React, { createContext } from 'react';
import { getLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // Define userData here, or retrieve it from localStorage or a state management solution.
    const userData = getLocalStorage(); // Adjust this line based on your needs

    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;

