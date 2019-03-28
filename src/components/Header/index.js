import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  background: #20b2aa;
`
const UL = styled.ul`
  padding: 1.2em 0.8em;
  &::after {
    content: '';
    display: block;
    clear: both;
  }
`
const LI = styled.li`
  display: inline-block;

  & + li {
    margin-left: 1em;
  }
`

const Link = styled(NavLink)`
  font-weight: bold;
  color: #333;
  text-decoration: none;
  &:hover:not(.active) {
    text-decoration: underline;
  }
  &.active {
    color: #dce6e8;
  }
`

export default () => {
  return (
    <Nav>
      <UL>
        <LI>
          <Link exact to="/">
            홈
          </Link>
        </LI>
        <LI>
          <Link to="/filter">필터</Link>
        </LI>
        <LI>
          <Link to="/rangeslider">레인지슬라이더</Link>
        </LI>
        <LI>
          <Link to="/carousel">슬라이더</Link>
        </LI>
      </UL>
    </Nav>
  )
}
