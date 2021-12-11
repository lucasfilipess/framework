import React from 'react'
import {
  UserProvider,
  ToastProvider,
  InterceptorProvider,
  ThemeProvider
} from 'contexts'

const AppProvider: React.FC = ({ children }) => (
  <InterceptorProvider>
    <ThemeProvider>
      <ToastProvider>
        <UserProvider>{children}</UserProvider>
      </ToastProvider>
    </ThemeProvider>
  </InterceptorProvider>
)

export default AppProvider
