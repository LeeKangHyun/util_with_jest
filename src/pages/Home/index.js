import React from 'react'

import Utils from '@/Utils'

const App = () => {
  return (
    <section>
      <article>Home</article>
      {Utils.useEventListener()}
    </section>
  )
}

export default App
