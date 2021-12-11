/* This example requires Tailwind CSS v2.0+ */
import React, { ReactNode } from 'react'
import { Switch } from '@headlessui/react'
import { classNames } from 'utils'

export type Props = {
  enabled: boolean
  onChange: (arg?: unknown) => void
  label?: string | ReactNode
}

const Toggle: React.FC<Props> = ({ enabled, onChange, label }) => {
  return (
    <Switch.Group as="div" className="flex items-center bg-transparent">
      <Switch
        checked={enabled}
        onChange={onChange}
        className="flex-shrink-0 group relative bg-transparent rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bg-transparent w-full h-full rounded-md"
        />
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? 'bg-cyan-600' : 'bg-gray-200',
            'pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200'
          )}
        />
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200'
          )}
        />
      </Switch>
      {label && (
        <Switch.Label as="span" className="ml-3">
          <span>{label}</span>
        </Switch.Label>
      )}
    </Switch.Group>
  )
}

export default Toggle
