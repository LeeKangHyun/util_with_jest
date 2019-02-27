import React, { Component } from 'react'
import _ from 'lodash'
import noUiSlider from 'nouislider'

import 'nouislider/distribute/nouislider.min.css'

class RangeSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: [],
      isActive: false,
    }
  }

  static defaultProps = {
    maximum: 300,
    value: [0, 999999],
    onUpdateRange: () => {},
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    const { isActive } = this.state
    const { value } = this.props
    const nowValue = this.slider.noUiSlider.get()
    const numValue = nowValue.map(v => +v)

    if (
      isActive === prevState.isActive &&
      !isActive &&
      value &&
      !_.isEqual(numValue, value)
    ) {
      return 'set'
    }
    return null
  }

  componentDidMount() {
    this.initSlider()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot === 'set') {
      const { value } = this.props
      this.slider.noUiSlider.set(value)
    }
  }

  initSlider = () => {
    const { onUpdateRange } = this.props
    const { value } = this.state
    noUiSlider.create(this.slider, {
      start: [0, 999999],
      connect: true,
      behaviour: 'drag',
      range: {
        min: 0,
        '50%': [150, 50],
        '95%': [300, 999699],
        max: 999999,
      },
    })

    this.slider.noUiSlider.set(value)

    this.slider.noUiSlider.on('start', () => {
      this.setState({
        isActive: true,
      })
    })

    this.slider.noUiSlider.on('update', (value, handle, unencoded) => {
      if (handle === 0 && Math.round(value[0]) === 999999) {
        return this.slider.noUiSlider.set(this.props.maximum)
      }

      const val = unencoded.map(v => Math.round(v))
      if (_.isEqual(val, this.props.value)) {
        return
      }

      onUpdateRange(val)
    })

    this.slider.noUiSlider.on('change', (value, handle, unencoded) => {
      const val = unencoded.map(v => Math.round(v))
    })

    this.slider.noUiSlider.on('end', () => {
      this.setState({
        isActive: false,
      })
    })
  }

  render() {
    return (
      <article>
        <div ref={ref => (this.slider = ref)} />
      </article>
    )
  }
}

export default RangeSlider
