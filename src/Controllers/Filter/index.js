import React, { Component } from 'react'
import qs from 'query-string'

const Controller = Wrapper =>
  class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        filters: this.initialFilter,
      }
    }

    get initialFilter() {
      return {
        standardRegions: null,

        convention: false, //웨딩홀/컨벤션
        hotel: false, // 호텔
        house: false, //하우스/야외/전통

        toneSepia: false, // 세피아톤
        toneWhite: false, // 화이트톤
        tonePeach: false, // 피치톤
        vivid: false, // 선명한색감
        moodWarm: false, // 따뜻한 분위기
        comfy: false, // 편안한색감
        gorgeous: false, // 화사한색감
        classic: false, // 고전적인클래식
        dramatic: false, // 드라마틱
        vintage: false, // 빈티지보정

        priceFrom: 0,
        priceTo: 0,

        albumType: false, //인화 앨범 비치중
        displayType: false, //디스플레이 전시중
        visitor: false, // 갤러리 방문고객 할인
        isEnterprise: false, //사업자등록증 인증
      }
    }

    componentDidMount() {}

    replaceHistory = () => {
      const { history } = this.props
      history.replace({
        search: `${qs.stringify({
          filters: JSON.stringify({}),
        })}`,
      })
    }

    render() {
      return <Wrapper {...this.state} {...this.props} />
    }
  }

export default Controller
