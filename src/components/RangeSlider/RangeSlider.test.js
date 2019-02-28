import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import RangeSlider from './index'

configure({ adapter: new Adapter() })

describe('RangeSlider', () => {
  let component = null
  test('렌더가 되나?', () => {
    component = mount(<RangeSlider />)
  })
  
  test('', () => {
    expect(component).toMatchSnapshot()
  })
})
