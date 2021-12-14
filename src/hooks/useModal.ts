import { useContext } from 'react'
import { ModalContext, ModalContextData } from 'contexts'

const useModal = (): ModalContextData => {
  const context = useContext(ModalContext)
  return context
}

export default useModal
