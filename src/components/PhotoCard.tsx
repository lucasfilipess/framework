import React from 'react'

export type Props = {
  url: string
  title: string
}

const PhotoCard: React.FC<Props> = ({ url, title }) => {
  return (
    <li className="relative">
      <div
        className={
          'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-cyan-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden'
        }
      >
        <img
          src={url}
          alt={title}
          className={'group-hover:opacity-75 object-cover pointer-events-none'}
        />
        <button type="button" className="absolute inset-0 focus:outline-none">
          <span className="sr-only">View details for {title}</span>
        </button>
      </div>
      <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none dark:text-gray-400">
        {title}
      </p>
    </li>
  )
}

export default PhotoCard
