import React, { InputHTMLAttributes } from 'react'

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
}

const Checkbox: React.FC<Props> = ({ id, label, ...rest }) => {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        className="h-4 w-4 text-cyan-700 focus:ring-cyan-700 border-gray-300 rounded"
        {...rest}
      />
      {label && (
        <label
          id={id}
          htmlFor={id}
          className="ml-2 block text-sm text-gray-900"
        >
          {label}
        </label>
      )}
    </div>
  )
}

export default Checkbox
