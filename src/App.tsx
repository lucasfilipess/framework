import React from 'react'
import { AppProvider } from 'contexts'
import { Routes } from 'routes'

export const App: React.FC = () => (
  <AppProvider>
    <Routes />
  </AppProvider>
)

export default App
