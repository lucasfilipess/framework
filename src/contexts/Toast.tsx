import React from 'react'
import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ToastProvider: React.FC = ({ children }) => {
  return (
    <>
      {children}
      <ToastContainer
        transition={Slide}
        position="top-right"
        autoClose={3000}
      />
    </>
  )
}

export default ToastProvider
