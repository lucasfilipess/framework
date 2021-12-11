import React, { useEffect, useState } from 'react'
import {
  ViewGridIcon as ViewGridIconSolid,
  ViewListIcon
} from '@heroicons/react/solid'
import { Link } from 'react-router-dom'
import { getAlbums, getPhotos, PhotosProps } from 'services'
import { Select, OptionsProps, Loader } from 'components'
import { classNames } from 'utils'

const Albums: React.FC = () => {
  const [albums, setAlbums] = useState<OptionsProps[]>([
    { label: 'Selecione um álbum', value: '' }
  ])

  const [photos, setPhotos] = useState<PhotosProps[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const asyncUseEffect = async () => {
      try {
        const items = await getAlbums()
        setAlbums((prev) => [
          ...prev,
          ...items.map(({ userId, title }) => ({ value: userId, label: title }))
        ])
      } catch (error) {
        console.log(error)
      }
    }
    asyncUseEffect()
  }, [])

  const handleGetPhotos = async (userId: number) => {
    try {
      setPhotos(await getPhotos(userId))
    } catch (error) {
      console.log(error)
    }
  }

  const handleChangeAlbum = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIsLoading(true)
    const { value } = event.target
    handleGetPhotos(Number(value))
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  const tabs = [
    { name: 'Vistos Recentemente', to: '/', current: true },
    { name: 'Adicionados Recentemente', to: '/', current: false },
    { name: 'Favoritos', to: '/', current: false }
  ]

  return (
    <div className="w-full pt-8 px-4 sm:px-6 lg:px-8">
      <div className="flex">
        <div className="w-full">
          <h1 className="flex-1 text-2xl font-bold text-gray-900">Álbuns</h1>
          <div className="w-full max-w-md">
            <Select
              className="w-full"
              options={albums}
              onChange={handleChangeAlbum}
            />
          </div>
        </div>
        <div className="ml-6 bg-gray-100 p-0.5 rounded-lg flex items-center sm:hidden">
          <button
            type="button"
            className="p-1.5 rounded-md text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
          >
            <ViewListIcon className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Use list view</span>
          </button>
          <button
            type="button"
            className="ml-0.5 bg-white p-1.5 rounded-md shadow-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
          >
            <ViewGridIconSolid className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Use grid view</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-3 sm:mt-2">
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm rounded-md"
            defaultValue="Recently Viewed"
          >
            <option>Recently Viewed</option>
            <option>Recently Added</option>
            <option>Favorited</option>
          </select>
        </div>
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
            <div className="hidden ml-6 bg-gray-100 p-0.5 rounded-lg items-center sm:flex">
              <button
                type="button"
                className="p-1.5 rounded-md text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
              >
                <ViewListIcon className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Use list view</span>
              </button>
              <button
                type="button"
                className="ml-0.5 bg-white p-1.5 rounded-md shadow-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
              >
                <ViewGridIconSolid className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Use grid view</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="mt-8 pb-16" aria-labelledby="gallery-heading">
          <h2 id="gallery-heading" className="sr-only">
            Recently viewed
          </h2>
          <ul
            role="list"
            className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
          >
            {photos.map((photo, index) => (
              <li key={`photo-${index}`} className="relative">
                <div
                  className={
                    'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-cyan-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden'
                  }
                >
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className={
                      'group-hover:opacity-75 object-cover pointer-events-none'
                    }
                  />
                  <button
                    type="button"
                    className="absolute inset-0 focus:outline-none"
                  >
                    <span className="sr-only">
                      View details for {photo.title}
                    </span>
                  </button>
                </div>
                <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                  {photo.title}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}

export default Albums
