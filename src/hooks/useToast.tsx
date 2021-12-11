import { toast, ToastContent, ToastOptions } from 'react-toastify'

const useToast = () => {
  const createToast = (content: ToastContent, options?: ToastOptions) =>
    toast(content, options)
  return { createToast }
}

export default useToast
