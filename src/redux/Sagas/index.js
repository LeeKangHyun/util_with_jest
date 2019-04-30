import { all, fork } from 'redux-saga/effects'

import watchFetchFilters from './watchFetchFilters'
import watchFetchCounter from './watchFetchCounter'

export default function* rootSaga() {
  yield all([
    fork(watchFetchFilters),
    fork(watchFetchCounter)
  ])
}
