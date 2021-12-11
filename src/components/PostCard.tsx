import React from 'react'

export type Props = {
  title: string
  body: string
}

const PostCard: React.FC<Props> = ({ title, body }) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden w-full">
      <div className="flex-1 bg-white p-6 flex flex-col justify-between dark:bg-gray-800">
        <div className="flex-1">
          <div className="block mt-2">
            <p className="text-xl font-semibold text-gray-900 dark:text-gray-400">
              {title}
            </p>
            <p className="mt-3 text-base text-gray-500">{body}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
