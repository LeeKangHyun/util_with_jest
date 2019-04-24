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
      {Utils.useOnClickOutside()}
      {Utils.usePrevious()}
      {Utils.useOnScreen()}
    </section>
  )
}

export default App
