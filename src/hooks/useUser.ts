import { useContext } from 'react'
import { UserContext, UserContextData } from 'contexts'

const useUser = (): UserContextData => {
  const context = useContext(UserContext)
  return context
}

export default useUser
