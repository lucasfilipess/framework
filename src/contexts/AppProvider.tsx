import React from 'react'
import { UserProvider, ToastProvider, InterceptorProvider } from 'contexts'

const AppProvider: React.FC = ({ children }) => (
  <InterceptorProvider>
    <ToastProvider>
      <UserProvider>{children}</UserProvider>
    </ToastProvider>
  </InterceptorProvider>
)

export default AppProvider
