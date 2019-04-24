import React from 'react'
import { map } from 'lodash'
import styled from 'styled-components'

import Slider from '@/components/Carousel'
import Swiper from './Components/Swiper'

import withController from './Controller'

const Card = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 397px;
  height: 508px;
  border: 1px solid red;
  & + & {
    margin-left: 195px;
  }
`

const H1 = styled.h1`
  font-size: 18px;
  color: #222;
  line-height: 1.5em;
  user-select: none;
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
      <Swiper>
        <Card><H1>1</H1></Card>
        <Card><H1>2</H1></Card>
        <Card><H1>3</H1></Card>
        <Card><H1>4</H1></Card>
        <Card><H1>5</H1></Card>
      </Swiper>
      {/*<Slider>
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
      </Slider>*/}
    </div>
  )
}

export default withController(Carousel)
