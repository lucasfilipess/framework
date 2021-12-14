import React, { ReactNode, useState, createContext } from 'react'
import { Modal } from 'components'

export type ModalContextData = {
  openModal(): void
  closeModal(): void
  createModal(arg: ReactNode): void
}

export const ModalContext = createContext<ModalContextData>(
  {} as ModalContextData
)

const ModalProvider: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [content, setContent] = useState<ReactNode>(<></>)

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)
  const createModal = (content: ReactNode) => setContent(content)

  return (
    <ModalContext.Provider value={{ openModal, closeModal, createModal }}>
      {children}
      <Modal open={open} setOpen={setOpen}>
        {content}
      </Modal>
    </ModalContext.Provider>
  )
}

export default ModalProvider
