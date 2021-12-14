import React, { ButtonHTMLAttributes } from 'react'
import { classNames } from 'utils'

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  appearance?: 'primary' | 'secondary'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const Button: React.FC<Props> = ({
  appearance = 'primary',
  size = 'md',
  children,
  className,
  disabled,
  ...rest
}) => {
  return (
    <button
      disabled={disabled}
      className={classNames(
        appearance === 'primary'
          ? 'bg-cyan-600 border border-transparent text-white hover:bg-cyan-700 focus:ring-cyan-500'
          : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-cyan-500',
        disabled ? 'cursor-not-allowed' : '',
        size === 'xs'
          ? 'px-2.5 py-1.5 text-xs rounded'
          : size === 'sm'
          ? 'px-3 py-2 text-sm leading-4 rounded-md'
          : size === 'md'
          ? 'px-4 py-2 text-sm rounded-md'
          : size === 'lg'
          ? 'px-4 py-2 text-base rounded-md'
          : 'px-6 py-3 text-base rounded-md',
        `inline-flex items-center font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
