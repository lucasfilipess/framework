import React from 'react'

export type OptionsProps = {
  value: string | number
  label: string
}

export type Props = {
  label?: string
  options: OptionsProps[]
  id?: string
  defaultValue?: string
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => unknown
  value?: string | number | readonly string[]
  name?: string
  className?: string
}

const Select: React.FC<Props> = ({
  label,
  options,
  id,
  defaultValue,
  onChange,
  value,
  name,
  className
}) => {
  return (
    <div>
      {label && (
        <label
          htmlFor="location"
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <select
        id={id}
        defaultValue={defaultValue}
        onChange={onChange}
        value={value}
        name={name}
        className={`mt-1 h-10 block w-full pl-3 pr-10 py-2 text-base bg-white border-2 border-gray-300 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm rounded-md dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 ${className}`}
      >
        {options.map(({ label, value }, index) => (
          <option key={`option-${index}`} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
