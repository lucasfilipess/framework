import React from 'react'
import { api } from 'services'
import { useToast } from 'hooks'

const InterceptorProvider: React.FC = ({ children }) => {
  const { createToast } = useToast()

  api.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error)
  )

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response) {
        const { message } = error.response
        createToast(message, {
          type: 'error'
        })
      }
      return Promise.reject(error)
    }
  )
  return <>{children}</>
}

export default InterceptorProvider
