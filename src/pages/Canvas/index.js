import React from 'react'

import Rect from './Components/Rectangle'
import DrawStar from './Components/Star'
import Space from './Components/Space'
import Clock from './Components/Clock'
import ColorPick from './Components/ColorPicker'
import Gray from './Components/GrayScale'

export default () => {
  return (
    <>
      <Rect />
      <DrawStar />
      <Space />
      <Clock />
      <ColorPick />
      <Gray />
    </>
  )
}
