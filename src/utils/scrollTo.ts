import { RefObject } from 'react'
import animateScroll from './animateScroll'

export type ScrollToProps = {
  id?: string
  ref?: RefObject<HTMLElement> | null
  duration?: number
}

const logError = () =>
  console.error(
    `Invalid element, are you sure you've provided element react ref?`
  )

const getElementPosition = (element: HTMLElement) => element.offsetTop

const scrollTo = ({ id = '', ref = null, duration = 1500 }: ScrollToProps) => {
  const byIdElement = document.getElementById(id)
  const initialPosition = window.scrollY
  const element = byIdElement ? byIdElement : ref ? ref?.current : null

  if (!element) {
    logError()
    return
  }

  animateScroll({
    targetPosition: getElementPosition(element),
    initialPosition,
    duration
  })
}

export default scrollTo
