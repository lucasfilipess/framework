import React from 'react'
import {
  AuthProvider,
  ToastProvider,
  InterceptorProvider,
  ThemeProvider,
  ModalProvider
} from 'contexts'

const AppProvider: React.FC = ({ children }) => (
  <InterceptorProvider>
    <ThemeProvider>
      <ToastProvider>
        <AuthProvider>
          <ModalProvider>{children}</ModalProvider>
        </AuthProvider>
      </ToastProvider>
    </ThemeProvider>
  </InterceptorProvider>
)

export default AppProvider
