import { all, fork } from 'redux-saga/effects'

import watchFetchFilters from './watchFetchFilters'

export default function* rootSaga() {
  yield all([fork(watchFetchFilters)])
}
