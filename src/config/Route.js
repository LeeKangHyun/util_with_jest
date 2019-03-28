import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import Header from '@/components/Header'
import { GlobalStyled } from '@/styled'

const Home = lazy(() => import(/* webpackChunkName: "lazy-home" */ '@/pages/Home'))
const Filter = lazy(() => import(/* webpackChunkName: "lazy-filter" */ '@/pages/Filter'))
const RangeSlider = lazy(() => import(/* webpackChunkName: "lazy-rangeSlider" */ '@/pages/RangeSlider'))
const Carousel = lazy(() => import(/* webpackChunkName: "lazy-carousel" */ '@/pages/Carousel'))

export default function Routes() {
  return (
    <Router basename="/">
      <Suspense fallback={<div>Loading...</div>}>
        <GlobalStyled />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/filter" component={Filter} />
          <Route path="/rangeslider" component={RangeSlider} />
          <Route path="/carousel" component={Carousel} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Router>
  )
}
