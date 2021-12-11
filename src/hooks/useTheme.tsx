import { useContext } from 'react'
import { ThemeContext, ThemeContextData } from 'contexts'

const useTheme = (): ThemeContextData => {
  const context = useContext(ThemeContext)
  return context
}

export default useTheme
