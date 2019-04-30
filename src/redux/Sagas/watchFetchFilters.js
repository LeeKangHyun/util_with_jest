import { put, select, takeEvery } from 'redux-saga/effects'
import { assign } from 'lodash'

import {
  FILTER_CHANGE,
  FILTER_CHANGE_APPLY,
  FILTER_RESET,
} from '@/redux/Actions/Filters'

import { getFilters } from './selector'

function* changeFilter(filters) {
  const origin = yield select(getFilters)

  yield put({
    type: FILTER_CHANGE_APPLY,
    filters: assign(origin, filters),
  })
}

export default function* watchfetchFilter() {
  yield takeEvery([FILTER_CHANGE, FILTER_RESET], changeFilter)
}
