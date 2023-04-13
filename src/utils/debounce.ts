export function debounce(func: (...args: any) => any, timeout = 500) {
  let timer: any
  return (...args: any) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func(args)
    }, timeout)
  }
}
