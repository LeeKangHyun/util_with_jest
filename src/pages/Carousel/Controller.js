import React, { useState, useEffect } from 'react'
import update from 'immutability-helper'

import apiCall from '@/Utils/apiCall'

export default Wrapper => function CarouselPage(props) {
  const [list, setList] = useState([])
  
  useEffect(() => {
    apiCall.get('https://jsonplaceholder.typicode.com/posts').then((data) => {
      setList(data)
    })
  }, [])
  
  const state = {
    list,
  }
  
  return (
    <Wrapper
      {...state}
      {...props} />
  )
}
