import React from 'react'
import { Link } from 'react-router-dom'

const NotFround: React.FC = () => {
  return (
    <div className="min-h-full pt-16 pb-12 flex flex-col w-full">
      <div className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0 flex justify-center">
          <Link to="/" className="inline-flex">
            <span className="sr-only">Workflow</span>
            <img
              className="h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark.svg?color=cyan&shade=600"
              alt=""
            />
          </Link>
        </div>
        <div className="py-16">
          <div className="text-center">
            <p className="text-sm font-semibold text-cyan-600 uppercase tracking-wide">
              erro 404
            </p>
            <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              Página não encontrada.
            </h1>
            <p className="mt-2 text-base text-gray-500">
              Não foi possível encontrar a página que você está procurando.
            </p>
            <div className="mt-6">
              <Link
                to="/"
                className="text-base font-medium text-cyan-600 hover:text-cyan-500"
              >
                Voltar para tela principal
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFround
