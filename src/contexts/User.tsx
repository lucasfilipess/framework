import React, { createContext, useState } from 'react'

export type UserProps = {
  name: string
  email: string
  imageUrl: string
}

export type UserContextData = {
  user: UserProps
  updateUser(user: UserProps): void
}

export const UserContext = createContext<UserContextData>({} as UserContextData)

const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserProps>(() => ({
    name: 'Lucas Filipe',
    email: 'lucasfilipedasilvasouza@gmail.com',
    imageUrl:
      'https://www.lucasfilipess.tech/_next/image?url=%2Fimg%2Flucas.jpeg&w=384&q=100'
  }))

  const updateUser = (user: UserProps) => setUser(user)

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
