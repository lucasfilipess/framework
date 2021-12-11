import React, { ReactNode, Fragment } from 'react'
import ReactTooltip, { TooltipProps } from 'react-tooltip'

export type Props = TooltipProps & {
  children: ReactNode
  label: string
  id: string
}

const Tooltip: React.FC<Props> = ({ children, label, id, ...rest }) => {
  return (
    <>
      <div data-tip data-for={id}>
        {children}
      </div>
      <ReactTooltip id={id} {...rest}>
        <span>{label}</span>
      </ReactTooltip>
    </>
  )
}

export default Tooltip
