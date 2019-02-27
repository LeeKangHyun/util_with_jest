import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import Header from '@/components/Header'
import Home from '@/pages/Home'
import Filter from '@/pages/Filter'
import RangeSlider from '@/pages/RangeSlider'
import { GlobalStyled } from '@/styled'

export default () => {
  return (
    <Router basename="/">
      <>
        <GlobalStyled />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/filter" component={Filter} />
          <Route path="/rangeslider" component={RangeSlider} />
          <Redirect to="/" />
        </Switch>
      </>
    </Router>
  )
}
