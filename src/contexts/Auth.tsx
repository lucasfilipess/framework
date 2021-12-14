import React, { createContext, useCallback, useState } from 'react'
import {
  api,
  signInService,
  SignInCredentialsProps,
  signUpService,
  SignUpCredentialsProps
} from 'services'
import { APP } from 'config'

export type UserProps = {
  name: string
  email: string
  imageUrl?: string
}

export type AuthState = {
  token: string
  user: UserProps
}

export type AuthContextData = {
  user: UserProps
  token: string
  signIn(credentials: SignInCredentialsProps): void
  signUp(credentials: SignUpCredentialsProps): void
  signOut(): void
  updateUser(user: UserProps): void
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem(`${APP}:token`)
    const user = localStorage.getItem(`${APP}:user`)

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      return { token, user: JSON.parse(user) }
    }

    return {} as AuthState
  })

  const signIn = useCallback(async (credentials: SignInCredentialsProps) => {
    const { data } = await signInService(credentials)
    const { token, name, email, imageUrl } = data
    const user = { name, email, imageUrl }
    localStorage.setItem(`${APP}:token`, token)
    localStorage.setItem(`${APP}:user`, JSON.stringify(user))
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    setData({ token, user })
  }, [])

  const signUp = useCallback(async (credentials: SignUpCredentialsProps) => {
    const { data } = await signUpService(credentials)
    const { token, name, email, imageUrl } = data
    const user = { name, email, imageUrl }
    localStorage.setItem(`${APP}:token`, token)
    localStorage.setItem(`${APP}:user`, JSON.stringify(user))
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    setData({ token, user })
  }, [])

  const updateUser = useCallback(
    (user: UserProps) => {
      localStorage.setItem(`${APP}:user`, JSON.stringify(user))
      setData({
        token: data.token,
        user
      })
    },
    [data.token]
  )

  const signOut = useCallback(() => {
    localStorage.clear()
    setData({} as AuthState)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        token: data.token,
        signIn,
        signUp,
        signOut,
        updateUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
