import React, { Fragment, useState, ReactNode } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { Link, useLocation } from 'react-router-dom'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { UserProps } from 'contexts'
import { classNames } from 'utils'

export type SidebarNavigationProps = {
  name: string
  to: string
  icon(props: React.ComponentProps<'svg'>): JSX.Element
}

export type UserNavigationProps = {
  name: string
  to: string
}

export type Props = {
  children: ReactNode
  user: UserProps
  sidebarNavigation: SidebarNavigationProps[]
  userNavigation: UserNavigationProps[]
}

const Layout: React.FC<Props> = ({
  children,
  user,
  sidebarNavigation,
  userNavigation
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { pathname } = useLocation()

  const setTitle = () => {
    return sidebarNavigation.find(({ to }) => to === pathname)?.name
  }

  return (
    <div className="h-full flex flex-col w-full">
      {/* Top nav*/}
      <header className="flex-shrink-0 relative h-16 bg-white flex items-center">
        {/* Logo area */}
        <div className="absolute inset-y-0 left-0 md:static md:flex-shrink-0">
          <Link
            to="/"
            className="flex items-center justify-center h-16 w-16 bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600 md:w-20"
          >
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
              alt="Workflow"
            />
          </Link>
        </div>
        {/* Menu button area */}
        <div className="absolute inset-y-0 right-0 pr-4 flex items-center sm:pr-6 md:hidden">
          {/* Mobile menu button */}
          <button
            type="button"
            className="-mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {/* Desktop nav area */}
        <div className="hidden md:min-w-0 md:flex-1 md:flex md:items-center md:justify-between">
          <div className="min-w-0 flex-1">
            <h1 className="text-xl mx-8">{setTitle()}</h1>
          </div>
          <div className="ml-10 pr-4 flex-shrink-0 flex items-center space-x-10">
            {/* nav */}
            <div className="flex items-center space-x-8">
              <span className="inline-flex">
                <Link
                  to="/"
                  className="-mx-1 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </Link>
              </span>
              <Menu as="div" className="relative inline-block text-left">
                <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-600">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src={user.imageUrl}
                    alt=""
                  />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute z-30 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Seu Perfil
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Sair
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide this `div` based on menu open/closed state */}
        <Transition.Root show={mobileMenuOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-40 md:hidden"
            onClose={setMobileMenuOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="hidden sm:block sm:fixed sm:inset-0 sm:bg-gray-600 sm:bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-out duration-150 sm:ease-in-out sm:duration-300"
              enterFrom="transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100"
              enterTo="transform opacity-100 scale-100  sm:translate-x-0 sm:scale-100 sm:opacity-100"
              leave="transition ease-in duration-150 sm:ease-in-out sm:duration-300"
              leaveFrom="transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100"
              leaveTo="transform opacity-0 scale-110  sm:translate-x-full sm:scale-100 sm:opacity-100"
            >
              <nav
                className="fixed z-40 inset-0 h-full w-full bg-white sm:inset-y-0 sm:left-auto sm:right-0 sm:max-w-sm sm:w-full sm:shadow-lg"
                aria-label="Global"
              >
                <div className="h-16 flex items-center justify-between px-4 sm:px-6">
                  <Link to="/">
                    <img
                      className="block h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark.svg?color=cyan&shade=500"
                      alt="Workflow"
                    />
                  </Link>
                  <button
                    type="button"
                    className="-mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close main menu</span>
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="border-t border-gray-200 pt-4 pb-3">
                  <div className="max-w-8xl mx-auto px-4 flex items-center sm:px-6">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3 min-w-0 flex-1">
                      <div className="text-base font-medium text-gray-800 truncate">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium text-gray-500 truncate">
                        {user.email}
                      </div>
                    </div>
                    <Link
                      to="/"
                      className="ml-auto flex-shrink-0 bg-white p-2 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </Link>
                  </div>
                  <div className="mt-3 max-w-8xl mx-auto px-2 space-y-1 sm:px-4">
                    {userNavigation.map(({ name, to }) => (
                      <Link
                        key={name}
                        to={to}
                        className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                      >
                        {name}
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
      </header>
      {/* Bottom section */}
      <div className="min-h-0 flex-1 flex overflow-hidden">
        {/* Narrow sidebar*/}
        <nav
          aria-label="Sidebar"
          className="hidden md:block md:flex-shrink-0 md:bg-gray-800 md:overflow-y-auto"
        >
          <div className="relative w-20 flex flex-col p-3 space-y-3">
            {sidebarNavigation.map(({ name, to, icon: Icon }) => (
              <Link
                key={name}
                to={to}
                className={classNames(
                  pathname === to
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-400 hover:bg-gray-700',
                  'flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg'
                )}
              >
                <span className="sr-only">{name}</span>
                <Icon className="h-6 w-6" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </nav>
        {/* Main area */}
        <main className="min-w-0 flex-1 border-t overflow-auto border-gray-200 lg:flex">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
