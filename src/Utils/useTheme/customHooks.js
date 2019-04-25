import { useLayoutEffect } from 'react'

export default (theme) => {
  useLayoutEffect(() => {
    for (const key in theme) {
      document.documentElement.style.setProperty(`--${key}`, theme[key])
    }
  }, [theme])
}
