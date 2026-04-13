import { createContext, useContext, useState } from 'react'

const AuthContext = createContext<any>(null)

export function AuthProvider({ children }: { children: JSX.Element }) {
  const [loggedIn, setLoggedIn] = useState(false)
  const login = (u: string, p: string) => {
    if (u === 'admin' && p === 'admin') setLoggedIn(true)
  }

  return <AuthContext.Provider value={{ loggedIn, login }}>
    {children}
    </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)