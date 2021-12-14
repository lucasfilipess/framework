import React from 'react'
import { useModal } from 'hooks'

export type Props = {
  url: string
  title: string
}

const PhotoCard: React.FC<Props> = ({ url, title }) => {
  const { createModal, openModal } = useModal()
  const handleOpenPhotoCard = () => {
    createModal(<img src={url} alt={title} />)
    openModal()
  }
  return (
    <li
      onClick={handleOpenPhotoCard}
      className="relative transform transition duration-300 cursor-pointer hover:scale-105"
    >
      <div className="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-cyan-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden">
        <img
          src={url}
          alt={title}
          className="object-cover pointer-events-none"
        />
      </div>
      <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none dark:text-gray-400">
        {title}
      </p>
    </li>
  )
}

export default PhotoCard
