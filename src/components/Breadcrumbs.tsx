import React from 'react'
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

export type Props = {
  currentPage: string
}

const Breadcrumbs: React.FC<Props> = ({ currentPage }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <Link
              to="/"
              className="text-gray-400 hover:text-gray-500 dark:text-gray-400"
            >
              <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Página principal</span>
            </Link>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRightIcon
              className="flex-shrink-0 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <span className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400">
              {currentPage}
            </span>
          </div>
        </li>
      </ol>
    </nav>
  )
}

export default Breadcrumbs
