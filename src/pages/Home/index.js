import React from 'react'

import Utils from '@/Utils'

const App = () => {
  return (
    <section>
      <article>Home</article>
      {Utils.useSpring()}
    </section>
  )
}

export default App
