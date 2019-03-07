import {
  FILTER_CHANGE,
  FILTER_CHANGE_APPLY,
  FILTER_RESET,
} from '@/redux/Actions/Filters'

const initialMain = {
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

export default (state = initialMain, action) => {
  switch (action.type) {
    case FILTER_CHANGE:
      return {
        ...state,
        ...action.filters,
      }
    case FILTER_CHANGE_APPLY:
      return {
        ...state,
      }
    case FILTER_RESET:
      return {
        ...initialMain,
      }
    default:
      return state
  }
}
