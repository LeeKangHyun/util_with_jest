import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Header from './index'

configure({ adapter: new Adapter() })

describe('Header', () => {
  let component = null
  it('헤더 렌더 되나?', () => {
    component = shallow(<Header />)
  })

  // it('헤더 스냅샷', () => {
  //   expect(component).toMatchSnapshot()
  // })
})
