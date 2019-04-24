import React from 'react'

import Utils from '@/Utils'

const App = () => {
  return (
    <section>
      <article>Home</article>
      {Utils.useLocalStorage()}
      {Utils.useHover()}
      {Utils.useWindowSize()}
      {Utils.useAnimation()}
    </section>
  )
}

export default App
