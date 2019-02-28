import React from 'react'
import { shallow, mount } from 'enzyme'

import Header from './index'

describe('Header', () => {
  let component = null
  it('헤더 렌더 되나?', () => {
    component = shallow(<Header />)
  })

  it('헤더 스냅샷', () => {
    expect(component).toMatchSnapshot()
  })
})
