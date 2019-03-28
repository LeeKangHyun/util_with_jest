import React from 'react'
import { map } from 'lodash'
import styled from 'styled-components'

import Slider from '@/components/Carousel'

import withController from './Controller'

const H1 = styled.h1`
  font-size: 18px;
  color: #222;
  line-height: 1.5em;
  span {
    text-shadow: 1px 1px 2px aqua;
  }
`

const H2 = styled.h2`
  font-size: 14px;
  line-height: 1.5em;
`

const Textarea = styled.textarea.attrs(() => ({
  readOnly: true,
}))`
  width: 100%;
  padding: 0;
  border: none;
  font-size: 12px;
  resize: none;
`

const Carousel = ({ list }) => {
  return (
    <div>
      <Slider>
        {map(list, (item) => {
          return (
            <div key={item.id}>
              <H1>
                Title: <span>{item.title}</span>
              </H1>
              <H2>UserId: {item.userId}</H2>
              <Textarea
                value={item.body}
              />
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default withController(Carousel)
