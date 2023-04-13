export const throttle = (callback: (...args: any) => void, delay: number = 1000) => {
  let throttleRef = false

  return (...args: any) => {
    if (!throttleRef) {
      callback(...args)
      throttleRef = true
      setTimeout(() => {
        throttleRef = false
      }, delay)
    }
  }
}
