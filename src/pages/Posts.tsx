import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ViewGridIcon as ViewGridIconSolid,
  ViewListIcon
} from '@heroicons/react/solid'
import { getPosts, PostsProps } from 'services'
import { Loader, PostCard } from 'components'
import { classNames } from 'utils'

const Posts: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [view, setView] = useState<'grid' | 'list'>('grid')
  const [posts, setPosts] = useState<PostsProps[]>([])

  useEffect(() => {
    const asyncUseEffect = async () => {
      setIsLoading(true)
      setPosts(await getPosts())
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }
    asyncUseEffect()
  }, [])

  const tabs = [{ name: 'Vistos Recentemente', to: '/', current: true }]

  return (
    <div className="w-full pt-8 px-4 sm:px-6 lg:px-8">
      <div className="flex">
        <h1 className="flex-1 text-2xl font-bold text-gray-900 dark:text-gray-300">
          Postagens
        </h1>
        <div className="ml-6 bg-gray-100 p-0.5 rounded-lg flex items-end sm:hidden dark:bg-transparent">
          <button
            type="button"
            className={classNames(
              view === 'grid'
                ? 'bg-white dark:bg-gray-800'
                : 'dark:bg-gray-700',
              'p-1.5 rounded-md text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500'
            )}
            onClick={() => setView('grid')}
          >
            <ViewListIcon className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Use list view</span>
          </button>
          <button
            type="button"
            className={classNames(
              view === 'list'
                ? 'bg-white dark:bg-gray-800'
                : 'dark:bg-gray-700',
              'ml-0.5 p-1.5 rounded-md shadow-sm text-gray-400 hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500'
            )}
            onClick={() => setView('list')}
          >
            <ViewGridIconSolid className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Use grid view</span>
          </button>
        </div>
      </div>
      <div className="mt-3 sm:mt-2">
        <div className="hidden sm:block">
          <div className="flex items-center border-b border-gray-200">
            <nav
              className="flex-1 -mb-px flex space-x-6 xl:space-x-8"
              aria-label="Tabs"
            >
              {tabs.map((tab) => (
                <Link
                  key={tab.name}
                  to={tab.to}
                  aria-current={tab.current ? 'page' : undefined}
                  className={classNames(
                    tab.current
                      ? 'border-cyan-500 text-cyan-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                    'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                  )}
                >
                  {tab.name}
                </Link>
              ))}
            </nav>
            <div className="hidden ml-6 bg-gray-100 p-0.5 rounded-lg items-center sm:flex dark:bg-transparent">
              <button
                type="button"
                className={classNames(
                  view === 'list'
                    ? 'bg-white dark:bg-gray-800'
                    : 'dark:bg-gray-700',
                  'p-1.5 rounded-md text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500'
                )}
                onClick={() => setView('list')}
              >
                <ViewListIcon className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Use list view</span>
              </button>
              <button
                type="button"
                className={classNames(
                  view === 'grid'
                    ? 'bg-white dark:bg-gray-800'
                    : 'dark:bg-gray-700',
                  'ml-0.5 p-1.5 rounded-md shadow-sm text-gray-400 hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500'
                )}
                onClick={() => setView('grid')}
              >
                <ViewGridIconSolid className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Use grid view</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          <section className="mt-8 pb-16" aria-labelledby="gallery-heading">
            <h2 id="gallery-heading" className="sr-only">
              Visto recentemente
            </h2>
            <ul
              role="list"
              className={classNames(
                view === 'list'
                  ? 'flex flex-col items-center w-full gap-y-8'
                  : 'grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'
              )}
            >
              {posts.map(({ id, title, body }) => (
                <PostCard key={`posts-${id}`} title={title} body={body} />
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  )
}

export default Posts
