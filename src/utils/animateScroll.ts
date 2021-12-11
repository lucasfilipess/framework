export type AnimateScrollProps = {
  targetPosition: number
  initialPosition: number
  duration: number
}

const pow = Math.pow

const easeOutQuart = (x: number) => {
  return 1 - pow(1 - x, 4)
}

const animateScroll = ({
  targetPosition,
  initialPosition,
  duration
}: AnimateScrollProps) => {
  let start: number
  let position: number
  let animationFrame: number

  const requestAnimationFrame = window.requestAnimationFrame
  const cancelAnimationFrame = window.cancelAnimationFrame

  const maxAvailableScroll =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight

  const amountOfPixelsToScroll = initialPosition - targetPosition

  const step = (timestamp: number) => {
    if (start === undefined) {
      start = timestamp
    }

    const elapsed = timestamp - start

    const relativeProgress = elapsed / duration

    const easedProgress = easeOutQuart(relativeProgress)

    position =
      initialPosition - amountOfPixelsToScroll * Math.min(easedProgress, 1)

    window.scrollTo(0, position)

    if (
      initialPosition !== maxAvailableScroll &&
      window.scrollY === maxAvailableScroll
    ) {
      cancelAnimationFrame(animationFrame)
      return
    }

    if (elapsed < duration) {
      animationFrame = requestAnimationFrame(step)
    }
  }

  animationFrame = requestAnimationFrame(step)
}

export default animateScroll
