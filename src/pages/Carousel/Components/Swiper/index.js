import React, { useEffect, useState, useCallback, useRef } from 'react'
import styled from 'styled-components'

const Wrap = styled.article`
  position: relative;
  width: 1200px;
  overflow: hidden;
  margin: 0 auto;
  border: 1px solid #5356f7;
`

const Button = styled.button`
  position: absolute;
  top: 50%;
  display: block;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0;
  transform: translateY(-50%);
  outline: none;
  cursor: pointer;
  z-index: 10;
  svg {
    width: 16px;
    height: 31px;
  }
`

const Prev = styled(Button)`
  left: 0;
`

const Next = styled(Button)`
  right: 0;
`

const Carousel = styled.div`
  position: relative;
  left: 0;
  white-space: nowrap;
`

export default function Swiper({ children }) {
  const [active, setActive] = useState(0)
  const posX = useRef(397)
  
  const swiperRef = useRef(null)
  const Left = useRef(0)
  
  const prev = () => {
    if (active <= 0) return
    setActive(active - 1)
    swiperRef.current.style.left = `${Left.current + (active * posX.current)}px`
    Left.current = swiperRef.current.style.left
  }
  
  const next = () => {
    if (active >= children.length) return
    setActive(active + 1)
    swiperRef.current.style.left = `${Left.current - (active * posX.current)}px`
    Left.current = swiperRef.current.style.left
  }
  
  return (
    <Wrap>
      <Prev onClick={prev}>
        <svg
          width="12"
          height="24"
          viewBox="0 0 12 24"
          fill="none"
        >
          <g>
            <path
              opacity="0.28"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.96 12L12 23.4L11.64 24L0 12L11.64 0L12 0.64L0.96 12Z"
              fill="#222222"
            />
          </g>
        </svg>
      </Prev>
      <Carousel
        ref={swiperRef}>
        {children}
      </Carousel>
      <Next onClick={next}>
        <svg
          width="12"
          height="24"
          viewBox="0 0 12 24"
          fill="none"
        >
          <g>
            <path
              opacity="0.28"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.04 12L0 0.6L0.36 0L12 12L0.36 24L0 23.36L11.04 12Z"
              fill="#222222"
            />
          </g>
        </svg>
      </Next>
    </Wrap>
  )
}

